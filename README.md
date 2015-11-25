# Magento Bookmarklet
Open the Magento Backend product edit page from the products page on the frontend.

### Installation:

1. Add a new bookmark to your bookmarks bar.
2. Name it "Open in Magento" or anything you like.
3. In the URL field paste the following code:
```javascript
javascript:root=jQuery("a.logo").attr('href');if(jQuery("body").hasClass("catalog-product-view")){id=jQuery(".no-display input").val();window.open(root+"index.php/admin/catalog_product/edit/id/"+id,"_blank");}else if(jQuery("body").hasClass("catalog-category-view")){alert("Edit Category is not supported yet!");}else{alert("This page is not supported yet!");}
```

### Usage:
 - Click the bookmarklet while on the product page of your Magento webstore, this will open the products edit page in a new tab.
