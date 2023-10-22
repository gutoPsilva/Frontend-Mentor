import { Component, EventEmitter, Output } from '@angular/core';
import Country from 'src/app/interfaces/ICountry';
import Filters from 'src/app/interfaces/IFilters';
import { Router } from '@angular/router';
import { CountriesService } from 'src/app/services/countries.service';
import { faMagnifyingGlass, faAngleDown, faXmark, faSpinner} from '@fortawesome/free-solid-svg-icons';
import RegionType from 'src/app/interfaces/RegionType';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent {
  countries: Country[] = this.getData('countries') ? JSON.parse(this.getData('countries')!) : []; // includes all countries listed on the search
  filteredCountries: Country[] = this.getData('filteredCountries') ? JSON.parse(this.getData('filteredCountries')!) : []; // includes only the filteredOnes, it starts being equal to countries cuz there aren't filters.
  selectedFilter: Filters = this.getData('selectedFilters') ? JSON.parse(this.getData('selectedFilters')!) : {
    Americas: false,
    Africa: false,
    Asia: false,
    Europe: false,
    Oceania: false,
  };
  search: string = this.getData('search') ? this.getData('search')! : ''; 
  isDropdownVisible: boolean = false;
  isLoadingData: boolean = false;

  faMagnifyingGlass = faMagnifyingGlass;
  faXMark = faXmark;
  faLoading = faSpinner;
  dropDownIcon = faAngleDown;

  constructor(private countriesService: CountriesService, private router: Router) {}

  ngOnInit(): void {
    if(this.countries.length === 0) this.searchByName('chad');
  }

  saveData(){
    localStorage.setItem('search', this.search);
    localStorage.setItem('countries', JSON.stringify(this.countries));
    localStorage.setItem('filteredCountries', JSON.stringify(this.filteredCountries));
    localStorage.setItem('selectedFilters', JSON.stringify(this.selectedFilter));
  }

  getData(key: string){
    const data = localStorage.getItem(key);
    if(data) return data;
    return null;
  }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  handleSubmit() {
    if(!this.search) return;
    this.searchByName(this.search);
  }

  async searchByName(countryName: string) {
    this.isLoadingData = true;
    await this.countriesService
      .getCountryByName(countryName, false) // false pois não é para pegar todos os detalhes dos países
      .subscribe({
        next: (res) => {
          this.countries = res;
          this.filteredCountries = this.countries; // sem filtros o filteredCountries são todos os countries

          // filtrar após a busca caso haja algum filtro aplicado anteriormente, de início nenhum é aplicado
          type K = keyof typeof this.selectedFilter; // deve ser uma CHAVE dentro do tipo Filters
          for (const filter in this.selectedFilter) {
            if (this.selectedFilter[filter as K])
              this.filterRegion(filter as K); // limitar que filter apesar de ser uma string, é exatamente uma das chaves presentes no objeto
          }
          
          this.saveData();
          this.isLoadingData = false;
        },
        error: (err) => {
          this.countries = [];
          this.filteredCountries = this.countries;
          this.saveData();
          this.isLoadingData = false;
        }
      });
  }

  removeFilter() {
    this.switchFilter(null);
    this.filteredCountries = this.countries; // sem filtros, mantém todos da última pesquisa.
    this.saveData();
  }

  switchFilter(region: RegionType) { // apenas exibição se um filtro está ativado ou não
    this.selectedFilter = { // se for fornecido uma region para filtrar desative todas e ative-a depois, senão só desative tudo
      Americas: false,
      Africa: false,
      Asia: false,
      Europe: false,
      Oceania: false,
    };

    if (!region) return; // não fazer a busca de qual filtro está ativado se não houver region fornecido

    for (let key in this.selectedFilter) {
      if (key === region) this.selectedFilter[region] = true;
    }
  }

  filterRegion(region: RegionType): void { // filtra de fato baseado na region fornecida.
    this.switchFilter(region);
    this.filteredCountries = this.countries.filter(country => country.region === region);
    this.saveData();
  }

  onCountryClick(country: Country){
    this.router.navigate(['/country/'+country.name.common]);
  }
}
