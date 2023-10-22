interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      // nativeName is here
      [key: string]: {
        common: string;
        official: string;
      };
    };
  };
  population: number;
  region: string;
  capital: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  subregion: string;
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: { [key: string]: string };
  borders: string[];
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  }
}

export default Country;
