# Product Manager Project

* [Product Manager Project | react-bootcamp-2019-haos_store](https://atanamhaos.github.io/react-bootcamp-2019-haos_store/bootcamp/week4/Product_Manager_Project/)
* [react-bootcamp-2019-haos_store/bootcamp/week4/Product_Manager_Project at master · atanamhaos/react-bootcamp-2019-haos_store](https://github.com/atanamhaos/react-bootcamp-2019-haos_store/tree/master/bootcamp/week4/Product_Manager_Project)

!['high level wireframe view of project'](./img/high_level_view.png)

# Requirements
* Home Page
* URL : ...
* Subtitled `Home Page`
   * Text `Welcome to the Project Product Management. Here we can manage a set of products/ You are able to ctreate a new product, remove old products, and edit products.`

## Product List Page

!['product list page wireframe'](./img/product_list.png)

* URL/products
* Subtitled `Home Page`
   * Panels with image of product, name of product, price of product, button to edit product, and button to delete product. Page should be able to display none, one, or many products.
   * Delete should delete the product immediately...
   * Edit button should redirect to page to edit the product.

## Edit Page

!['edit product wireframe'](./img/edit_page.png)

* URL : .../products/edit/<id>
* Subtitled `Edit Product`
* Three fields of `Title`, `Price`, and `Image URL`
   * Validation of fields
   * Title must be four or more characters
   * Price is required
   * Image URL is optional
* Delete button and Update button below the three fields.
   * Delete button should delete the product and redirect to the Product List Page
   * Update button should delete the product and redirect to the Product List Page

## Create Page

!['create product wireframe'](./img/create_page.png)

* URL : .../products/new
* Three fields of `Title`, `Price`, and `Image URL`
   * Validation of fields
   * Title must be four or more characters
   * Price is required
   * Image URL is optional
* Create button below the three fields.
   * Create button should create the product and redirect to the Product List Page

### Important for Requirements

* Exist on every page
   * Site Title `PPM Project Management`
   * Nav Links
      * Home
      * Product List
      * Product Creation
   * Content Panel
* App **Must** use Redux

### Recommendable Requirements

* Express backend
* Persistence
* repair/correction of obvious concerns a client might have w. a final product
* addtion of any obvious oversights the clients design might have
* provable consideration built-into design of below Advanced Requirements
* Any large deviation from requirements and/or attempt at Advanced requirements below results in a finished product

####  Advanced Requirements

* uploading of images supported
* Administrator/creator/viewer views
* Login
* Keyword Search

## Notable

* The create new product and edit product page are very similiar
* The standard [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
 operations are present in this site.
   * Create
   * Read
   * Update
   * Delete
* Obviously, this has been done before...
* [Product Manager Project coding dojo - Google Search](https://www.google.com/search?q=Product+Manager+Project+coding+dojo&oq=Product+Manager+Project+coding+dojo&aqs=chrome..69i57.12527j0j7&sourceid=chrome&ie=UTF-8)
* [NishiRoy/productManager: Coding Dojo Assignments](https://github.com/NishiRoy/productManager)
* [alexkenta/finalproject: MEAN: Exam for coding dojo. A product management app focusing on CRUD operations.](https://github.com/alexkenta/finalproject)

