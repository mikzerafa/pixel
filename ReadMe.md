# FrontEnd Tests for Pixel

- To run tests (in terminal)
`npm run open`
and select the spec you wish to run: Sign up or Casino

- alternatively
`npm run test`
to run them in CLI

# SignUp

## Tests for SignUp - Sanity
- Email and Password field visible (Is Visible tests)
- Should show page 2 when entering fake details on page 1
- Page 2 fields exist
- Should show page 3 when entering fake details on page 1 and 2
- Page 3 field exist
- Should show page 4 when entering fake details on page 1,2 and 3
- Page 4 fields exist
- Should be logged in when completing sign up process

## Tests for SignUp - Functional
- Continue Button Disabled before entering fake details
- Continue Button becomes Enabled after entering fake details

## Tests for SignUp - Data Validation
- Email field is valid

### Features
- Using Faker to Generate Fake Data so Sign Up can be fully built without refratoring
- generic commands
- pom
- Spec File Does not access Pom Directly

# Casino

## Tests for Casino - Sanity
- Every Category Contains Games atleast 1
- Each Game should have play button on hover
- Each Game Leads to a url with games including on click


### Features
- Looped It Block (Easy to add/remove categories)
