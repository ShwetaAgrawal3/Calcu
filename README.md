# GCP Resource Calculator App

Jira Ticket: [FINOPS-848](https://jira.devops.lloydsbanking.com.mcas.ms/browse/FINOPS-848)
Added BQ ticket: [FINOPS-802](https://jira.devops.lloydsbanking.com.mcas.ms/browse/FINOPS-802)

## Requirements
- [ ] All Stratos/CNE GCP products are available in the configuration set forth by the Excel calculator
- [ ] All computed values are correct as per the google calculator without VAT & uplift
- [ ] Uplift & VAT are applied correctly
- [ ] Frontend & backend connectivity
- [ ] Google Price list API is being used to pull in SKU values
- [ ] It works

## TODO:
- create script turn spaces into tabs
- detailedcosts modal, table headers are being pulled directly from the json, want custom table header
- ability to multiply total products?
- list all available GCP products
- Separate out the products and align them with the gcp calc from google
- Organize Jira tickets, capture requirements, progress so far
- set up gh repo
- Finish the frontend design

## Deployment Plan
- Stratos GKE tooling clusters, need to get access
- redis 
- CloudSQL database
- Load balancer -> Handles basic security as well as networking
- Harness pipeline for automated testing, image scanning & pushing to GAR
- GH repo (GH action for testing in dev branch?)
- what is needed:
    - 

## Testing Plan
- test in playpen with GKE, cloudsql, load balancer
- testing 80% code coverage
- Integration tests for the frontend & some unit testing to get to test coverage, smoke testing
- API testing in 2 stages, testing on the code side to check API functionality, testing of the API infra, load testing, etc.
- Backend integrations tests for pdf, excel route, unit tests for calculation
- what is needed:
    - 

## Release Process
- dev branch gets merged into main -> triggers automated testing pipeline -> executes integration tests in testing environment -> builds & scans images -> merge into main with version tag
- what is needed:
    - CR
    - E2E testing done
    - image testing & scanner
    - Story

## Branching
- main branch:
    - release branch
- dev branch:
    - dev checks out from main
- feature branch for devs to work on
- what is needed:
    - 

## Qs:
- How to release
- Focus on CNE products first or Stratos
- Scope of testing neeced
- What will be available on Stratos
- What to use for caching, cloud storage/ load balancer viable? build our own caching server?

### GCP

## Fronted: React

### Planned changes
- Adjust options input match closer to the GCP calculator
- Needs styling
- Component/ API route to create PDF, Excel, etc.
- Split database products into the appropriate Cloud products

### How to add a new product
- Create a new file in the src/components folder (naming convention is Product name + component, ie. StorageComponent)
- Copy+paste one of the already working components as a template

-   In Calculator.js:
        - Add the new variables to the Calculator function below the last added product, see screenshot below.
        ![Alt text](/readme_assets/addProdToFront/addProdToFront1.png?raw=true "Optional Title")
        -  From top to bottom add the new vars, follow the already existing vars
            - defaultValues:
            <!-- ![Alt text](/readme_assets/addProdToFront/addProdToFront2.png?raw=true "Optional Title") -->
            <img src="/readme_assets/addProdToFront2.png" width=100% />
            - changeHandlers:
            <!-- ![Alt text](/readme_assets/addProdToFront/addProdToFront3.png?raw=true "Optional Title") -->
            - useEffect:
            <!-- ![Alt text](/readme_assets/addProdToFront/addProdToFront4.png?raw=true "Optional Title") -->
            <!-- ![Alt text](/readme_assets/addProdToFront/addProdToFront5.png?raw=true "Optional Title") -->
            make sure to adjust the payload as well

            - add to api call:
            <!-- ![Alt text](/readme_assets/addProdToFront/addProdToFront6.png?raw=true "Optional Title") -->
            - add to the rendered elements:
            <!-- ![Alt text](/readme_assets/addProdToFront/addProdToFront7.png?raw=true "Optional Title") -->
            <!-- ![Alt text](/readme_assets/addProdToFront/addProdToFront8.png?raw=true "Optional Title") -->

- In the new component file replace the vars, change handlers, and adjust the values
- In the DetailedCostsModal.js add the new product (the name or json key added here will be the same as the product json sent by the backend)
    <!-- ![Alt text](/readme_assets/addProdToFront/addProdToFront9.png?raw=true "Optional Title") -->
- In the ProductSelectionModal.js add the new product (the name should be the same as component name)
    <!-- ![Alt text](/readme_assets/addProdToFront/addProdToFront10.png?raw=true "Optional Title") -->


## Backend: Golang

### Planned changes
- Function to receive and process data from the cache/database
- Calculation changes to use the SKU values on a monthly basis
- Function to print out detailed calculations as CSV, PDF, etc.
- Function to expose actual values used in the calculations to be used in the PDF, etc.
- Function to pull in/ set discounts
- Error & performance logging
- Split database products into the appropriate Cloud products
- Capture different environments

### How to add a new product:
- In the main.go add the new Product 
    <!-- ![Alt text](/readme_assets/addProdToBack/addProdToBack1.png?raw=true "Optional Title") -->
    <!-- ![Alt text](/readme_assets/addProdToBack/addProdToBack2.png?raw=true "Optional Title") -->
    <!-- ![Alt text](/readme_assets/addProdToBack/addProdToBack3.png?raw=true "Optional Title") -->

    Grand Total calculation needs to be reworked, instructions will be added later
- Create a new go file for the product calculations, needs to be part of the main package, add required vars, maps, and calculations

### Future Improvements
- Add other CSPs to the calculator (Azure, private cloud)
- Check API performance