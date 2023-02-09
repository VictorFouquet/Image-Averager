# Average Image

This app generates the average image from a given set of images.

The images received as inputs are converted to n-dimensional vectors.

The converted to vectors set of images gets its barycenter computed and written in the `static/output_images` folder.

## Prerequesites

- nodejs and npm

Run `npm install` to install this app's dependencies

## Usage

Run `npm run compile` to compile the app from `TypeScript` to `JavaScript ES5`.

Run `npm start` to run the app.

An example set is provided in the app `static` folder, holding picture with theme `city`.

Users can simply run `npm start` to regenerate the average image of this demo set.

Users can also empty the `static/input_images` folder and fill it in with new pictures.

### Config

Update the value `override` to `false` if images with same name in `output_images` folder should have their name set to unique name.

Update the `outWidth` and `outHeight` values with integers values to change the output pictures' dimensions.

Update the `outExt` value to change the extension of generated images (supported jpg, jpeg and png).

Then the script can be run again to generate new average images from new sets of images.

### Example

Here is a low resolution image generated from a set of 10 city pictures :

![city_average](/static/output_images/average.png)
