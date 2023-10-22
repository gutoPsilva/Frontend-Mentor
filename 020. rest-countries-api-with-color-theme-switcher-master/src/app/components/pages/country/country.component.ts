import { Component } from '@angular/core';
import Country from 'src/app/interfaces/ICountry';
import { CountriesService } from 'src/app/services/countries.service';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowLeftLong, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent {
  country: Country | null = null; // começa como nulo e ao caregar o componente é feita a busca, caso não haja país correspondente ao parâmetro da URL, mantem-se nulo
  countryNativeName: { common: string; official: string } | null = null;
  countryCurrencies: { name: string; symbol: string }[] = [];
  countryLanguages: string[] = [];
  countryBorders: { name: string }[] = []; // array de names, após listar todas as bordas pasta dar um unshift para remover o primeiro item

  isLoadingCountry: boolean = false;
  faArrow = faArrowLeftLong;
  faLoading = faSpinner;

  constructor(
    private countriesService: CountriesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe((params) => {
      const countryName = params.get('name');
      if (countryName) this.getCountry(countryName);
    });
  }

  clearCountry() {
    this.country = null;
    this.countryNativeName = null;
    this.countryCurrencies = [];
    this.countryLanguages = [];
    this.countryBorders = [];
  }

  async getCountry(countryName: string) {
    this.clearCountry();
    this.isLoadingCountry = true;

    this.countriesService.getCountryByName(countryName, true).subscribe({
      next: (res) => {
        if (res.length > 1) { // multiple countries returned by the API
          for (let i = 0; i < res.length; i++) {
            const country = res[i];
            if (country.name.common === countryName) this.country = country; // the country must be setted only if the response common.name at index i is equal to the countryName param, because when you call the api with 'china' for example, it returns 4 countries, but i wan't to match only the one that has the name.common === china since the countryName param is the country common name
          }
        } else this.country = res[0];

        for (const key in this.country?.name.nativeName) {
          this.countryNativeName = this.country.name.nativeName[key];
        }

        for (const key in this.country?.currencies) {
          this.countryCurrencies.push(this.country.currencies[key]);
        }

        for (const key in this.country?.languages) {
          this.countryLanguages.push(this.country.languages[key]);
        }

        for (const value of this.country?.borders!){
          this.getBorderFullName(value);
        }

        this.isLoadingCountry = false;
      },
      error: err => this.isLoadingCountry = false,
    });
  }

  async getBorderFullName(borderName: string) {
    this.countriesService.getBorderFullName(borderName).subscribe((res) => {
      if (res) this.countryBorders.push(res);
    });
  }

  onBorderClick(borderName: string) {
    this.router.navigate(['/country/' + borderName]);
  }
}
