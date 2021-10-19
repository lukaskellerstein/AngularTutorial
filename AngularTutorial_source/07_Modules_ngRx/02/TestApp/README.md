
# Use

add Modules - With NgRX

# Steps

## Seed app

`ng new TestApp1 --style=scss --routing`


``

## Generate Modules and components

### Widgets

> will contains only dumb components like button, checkbox ... etc

`ng g module widgets`

Create some components
`ng g component button`
`ng g component label`


### Common

> will contains common pages for web - login page, error page, not found page, home page ... etc.

`ng g module common`

Create some pages
`ng g component loginPage`
`ng g component errorPage`
`ng g component notFoundPage`
`ng g component homePage`

Create directory Domain and create three of feature modules

`cd domain`

### Cafe Management

`ng g module cafeManagement --routing`
`cd cafe-management`
`ng g component dashboard`
`ng g component list`
`ng g component detail`

### Product Management

`ng g module productManagement --routing`
`cd product-management`
`ng g component dashboard`
`ng g component list`
`ng g component detail`


### Trainings Management

`ng g module trainingsManagement --routing`
`cd trainings-management`
`ng g component dashboard`
`ng g component list`
`ng g component detail`


# Add NgRX




# Run 

`ng serve --aot`

