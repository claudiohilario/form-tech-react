# Form Tech React (Under construction)

![alt text](https://preview.ibb.co/dKHgTp/Form-Tech-Logo.png)

This project consists of the base development of a forms library to reactjs.

## JSON Structure

```json 
{
  "values": {
    "field_name": "value"
  },
  "errors": {
    "field_name": []
  }
}
```

## Main component <Form />
### Properties

|Prop|Type|Description|Example|
|----|:----:|-----------|-------|
|id|string|Identification of the form. (Must be unique)| |
|initialValues|Object|initial values of the form|  |
|onSubmit| Function |Callback function to submit form||
