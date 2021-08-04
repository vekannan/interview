# CSS
1. CSS Box Model
2.

## CSS BOX model
Padding, border and Margin . 


### display Property
block, inline-block, inline

A block item will, by default, fill the available inline space, whereas a inline and inline-block elements will only be as large as their content.

can't add height and width property to inline elements (span , a, li). In order to apply height and width then use inline-block 

### box-sizing: content-box(default) / border-box
Having content-box as the value of box-sizing means that when you set dimensions, such as a width and height, they will be applied to the content box. 
If you then set padding and border, these values will be added to the content box's size.

```
.my-box {
	width: 200px;
	border: 10px solid;
	padding: 20px;
}

```
In the above example the total dimention of .my-box is 200px for the content + 40px of padding + 20px of border makes a total visible width of 260px.

```
.my-box {
  box-sizing: border-box;
	width: 200px;
	border: 10px solid;
	padding: 20px;
}

```
In the above example the total with remains 200 only 
