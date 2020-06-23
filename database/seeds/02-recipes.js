exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          title: 'chicken nuggets',
          description:
            'chicken nuggets are not only for kids',
          ingredients:
            'chicken breasts, barbecue sauce, breading',
          directions: `wash the chicken breasts,
                      create the bredding,
                      bread the chicken breasts,
                      fry the breaded chicken breasts`,
          user_id: 1
        },
        {
          title: 'scooby snacks for kids',
          description:
            'scooby snacks are not only for doggies',
          ingredients:
            'oreo cookies, sugar, oil',
          directions: `crumble the oreo cookies,
                      add sugar at your discretion,
                      add the cooking oil,
                      fry the cookies`,
          user_id: 2
        },
        {
          title: 'italian pasta',
          description:
            'italian pasta with a twist',
          ingredients:
            'pasta, ground beef, oil',
          directions: `wash the pasta,
                      add water to a cooking bowl,
                      boil the water until it bubbles,
                      take the pasta out and add the ground beef`,
          user_id: 2
        }
      ]);
    });
};
