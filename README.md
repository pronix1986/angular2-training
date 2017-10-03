Task 1.

    1. Installed Angular-CLI.

    2. Created project on GitHub and branch Task1.

    3. Created new project : ng new shop.
    
    4. Added a couple of field in AppComponent: title, name, category, isAvailable, ingredients, equivalents. Showed them in 'Some Product' table.

    5. Added 'Buy' button in 'Some Product' table that simply shows 'Bought!' in console.

    6. Created ProductService to get a bunch of products. All the product can be seen in 'List of Products' table.

    7. Created CartComponent to display a list of purchased products.

Task 2.

    1. Reorganized the app. Created CartModule, ProductsModule.

    2. ProductService and ProductListComponent was created in Task1.

    3. CartList was created in Task1.
    
    4. Created CartItem to display single item in Cart component. It is possible to change 'quantity' property and remove the item.

    5. @Input was used in CartItem component to receive a single product from Cart component.

    6. @NgOnInit was used in CartItem component to set the initial cost.

    7. DOM event 'click' was used extensively: Cart, CartItem and ProductListComponent.

    8. Created CartProductService to provide some utility methods for Cart module.

    9. Haven't done.

    10. Haven't done.

    11. Haven't done.

    12. Haven't done.

Task 3.

    1. Updated CartProductService to provide some useful functionality for working with cart items.

    2. Created LocalStorageService to work with localStorage.

    3. Created ConfigOptionsService to store user's email.

    4. Created GeneratorService to generate n-lenght random string (n is set during registration phase).

    5. The services above were injected. @Optional was used.

    6. Haven't done.

Task 4.

    1. Built-in 'currency' pipe was used to display product price in 'List of Product' and 'Cart' table.

    2. Custom 'orderBy' pipe was created and used for sorting data in 'List of Product' table.

    3. README was updated.


    