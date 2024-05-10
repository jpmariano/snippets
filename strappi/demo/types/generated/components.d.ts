import type { Schema, Attribute } from '@strapi/strapi';

export interface IngredientIngredient extends Schema.Component {
  collectionName: 'components_ingredient_ingredients';
  info: {
    displayName: 'Ingredient';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ingredient.ingredient': IngredientIngredient;
    }
  }
}
