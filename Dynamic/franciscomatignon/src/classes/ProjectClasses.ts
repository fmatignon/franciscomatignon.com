declare module ProjectClasses{

  export interface Client {
      name: string;
      link: string;
  }

  export interface Location {
      city: string;
      country: string;
  }

  export interface Project{
      name: string;
      clients: Client[];
      year: number;
      location: Location;
      text: string;
      link: string;
      images: string[];
  }

}
