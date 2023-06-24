export interface IValue{
    kcal: string,
    serve: string,
    grams: string,
  }

export interface ICard {
    id: number;
    attributes: IAttributesCard;
  }
  export interface IAttributesCard {
    title: string;
    description: string;
    small_extra_info: any;
    image_url: string;
    id: number | string;
  }
  export interface IAttributesTag {
    name: string;
    image_url: string;
  }
  export interface CardListProps {
    navigation?: any;
  }
  export interface ITag {
    id: string;
    attributes: IAttributesTag;
  }
  export interface IDetailedCardData {
    additionalInfo: string[];
    process: string;
    image_url: string;
    constituents: string[];
  }
  export interface DetailedCardProps {
    data: IDetailedCardData;
    navigation: any;
  }
  export interface IAttributesRecipe {
    title: string;
    process: string;
    small_extra_info: any;
    extra_info:any;
    image_url: string;
  }
  
export interface IUser{
  name:string;
  email:string;
  id:string;
  favorite:IFavorite
}
export interface IFavorite{
  id:string;
  data:IRecipe[];
}
  export interface IRecipe {
    id: string;
    attributes: IAttributesRecipe;
  }
  export interface NavigateBarProps {
    tags: any;
    handleTagClick: any;
    handleFavoritesClick:any;
  }
  export interface CardProps {
    title: string;
    description: string;
    options?: any;
    imageUrl?: any;
    id?: number;
  }
  
  export interface IAttributesIngredient {
    name: string;
    image_url: string;
  }
  export interface IIngredient{
    id:string;
    attributes:IAttributesIngredient;
  }