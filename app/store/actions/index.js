export const likeIngredient = (ingredient) => ({
  type: 'LIKE_ING',
  ingredient
} );

export const dislikeIngredient = (ingredient) => ({
  type: 'DISLIKE_ING',
  ingredient
})
