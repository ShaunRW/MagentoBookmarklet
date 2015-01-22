// get the root directory of the magento installation.
root = jQuery("a.logo").attr('href');

// Check if the current page is a product, category, or something else.
if(jQuery("body").hasClass("catalog-product-view")){ // is product page

	// Get the product id from a field on the page that contains it.
	id = jQuery(".no-display input").val();

	// Openthe magento edit product page in a new tab.
	window.open(root+"index.php/admin/catalog_product/edit/id/"+id,"_blank");

}else if(jQuery("body").hasClass("catalog-category-view")){ // is category

	// alert the user that the current page isnt supported
	alert("Edit Category is not supported yet!");

}else{ // is something else

	// alert the user that the current page isnt supported
	alert("This page is not supported yet!");
}