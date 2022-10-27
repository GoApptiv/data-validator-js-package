# GoApptiv Data Validator JS

This package is used to validate data like Mobile Number, PAN, GST, Pincode and many more.

Currently it provides validations for the following fields

1. Mobile Number
2. GST
3. PAN
4. Pincode
5. VPA
6. Email

## Installation

1. Create a `.npmrc` in the root folder and add the following lines.

```bash
//npm.pkg.github.com/:_authToken=TOKEN
@goapptiv:registry=https://npm.pkg.github.com/
```

2. Create a personal token with **read:packages** permission and replace the `TOKEN` with your personal token in the above mentioned file.

3. Install the package using the following command

```bash
npm install @goapptiv/data-validator
```

## Usage

### Validating Data

```ts
import { GaDataValidator } from '@goapptiv/data-validator';

GaDataValidator.isEmailValid('sagar.vaghela@goapptiv.com');
```

### Parsing Data

```ts
import { GaDataValidator } from '@goapptiv/data-validator';

GaDataValidator.parseEmail('sagar.vaghela@goapptiv.com');
```

### Regex

```ts
import { GST_REGEX } from '@goapptiv/data-validator';
```
