(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[24],{488:function(e,a,t){"use strict";var l=t(0),r=t.n(l),n=t(103),c=t(145);a.a=function(){return r.a.createElement("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"breadcrumb-content text-center"},r.a.createElement(c.Breadcrumbs,{separator:r.a.createElement("span",null,"/"),item:n.c,finalItem:"span"}))))}},771:function(e,a,t){"use strict";t.r(a);var l=t(486),r=t(0),n=t.n(r),c=t(103),s=t(493),m=t.n(s),o=t(64),i=(t(145),t(485),t(491)),d=(t(488),t(521)),u=t(529);a.default=Object(o.connect)((function(e){return{cartItems:e.cartData,currency:e.currencyData}}))((function(e){var a=e.location,t=e.cartItems,s=(e.currency,a.pathname,Object(r.useState)(!1)),o=Object(l.a)(s,2),E=o[0],p=o[1],h=Object(r.useState)(!1),b=Object(l.a)(h,2),N=b[0],v=b[1],g=Object(d.b)({initialValues:{fname:"",lname:"",email:"",phone:"",country:"",address:"",address1:"",city:"",state:"",zip:"",password:"",notes:""},validationSchema:u.a({fname:u.c().min(2,"Mininum 2 characters").max(15,"Maximum 15 characters").required("First name is a required field!"),lname:u.c().min(2,"Mininum 2 characters").max(15,"Maximum 15 characters").required("Last name is a required field!"),email:u.c().email("Invalid email format").required("Email is a required field!"),phone:u.c().required("phone Number is a required field!"),zip:u.c().required("zip is a required field!"),password:u.c().min(6,"Minimum 6 characters").required("password is a required field!"),country:u.c().required("Country is a required field!"),city:u.c().required("city is a required field!"),state:u.c().required("state is a required field!"),address:u.c().min(2,"Mininum 5 characters").max(15,"Maximum 15 characters").required("House name is a required field!"),address1:u.c().min(2,"Mininum 5 characters").max(15,"Maximum 15 characters").required("Apartment is a required field!"),notes:u.c().min(2,"Mininum 10 characters").max(15,"Maximum 15 characters").required("notes is a required field!")}),onSubmit:function(e,a){var t=a.resetForm;alert(JSON.stringify(e,null,2)),t({values:""})}});return n.a.createElement(r.Fragment,null,n.a.createElement(m.a,null,n.a.createElement("title",null,"Impetrosys"),n.a.createElement("meta",{name:"description",content:"Checkout page of flone react minimalist eCommerce template."})),n.a.createElement(i.a,{headerTop:"visible"},n.a.createElement("div",{className:"checkout-area pt-10 pb-30"},n.a.createElement("form",{onSubmit:g.handleSubmit},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"billing-info-wrap-new"},n.a.createElement("h2",null," Your Checkout")),t&&t.length>=1?n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-7"},n.a.createElement("div",{className:"billing-info-wrap"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"billing-info mb-20"},n.a.createElement("label",null,"First Name"),n.a.createElement("input",{type:"text",name:"fname",value:g.values.fname,onChange:g.handleChange}),g.errors.fname&&g.touched.fname&&n.a.createElement("p",{className:"text-danger"},g.errors.fname))),n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"billing-info mb-20"},n.a.createElement("label",null,"Last Name"),n.a.createElement("input",{type:"text",name:"lname",value:g.values.lname,onChange:g.handleChange}),g.errors.lname&&g.touched.lname&&n.a.createElement("p",{className:"text-danger"},g.errors.lname))),n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"billing-info mb-20"},n.a.createElement("label",null,"Phone"),n.a.createElement("input",{name:"phone",placeholder:"Mobile Number",type:"number",value:g.values.phone,onChange:g.handleChange}),g.errors.phone&&g.touched.phone&&n.a.createElement("p",{className:"text-danger"},g.errors.phone))),n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"billing-info mb-20"},n.a.createElement("label",null,"Email Address"),n.a.createElement("input",{type:"email",name:"email",value:g.values.email,onChange:g.handleChange}),g.errors.email&&g.touched.email&&n.a.createElement("p",{className:"text-danger"},g.errors.email))))),n.a.createElement("div",{className:"billing-info-wrap"},n.a.createElement("h3",null,"Billing Details"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"billing-select mb-20"},n.a.createElement("label",null,"Country"),n.a.createElement("select",{type:"email",name:"country",value:g.values.country,onChange:g.handleChange},n.a.createElement("option",null,"Select a country"),n.a.createElement("option",null,"Azerbaijan"),n.a.createElement("option",null,"Bahamas"),n.a.createElement("option",null,"Bahrain"),n.a.createElement("option",null,"Bangladesh"),n.a.createElement("option",null,"Barbados")),g.errors.country&&g.touched.country&&n.a.createElement("p",{className:"text-danger"},g.errors.country))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"billing-info mb-20"},n.a.createElement("label",null,"Street Address"),n.a.createElement("input",{className:"billing-address",placeholder:"House number and street name",type:"text",name:"address",value:g.values.address,onChange:g.handleChange}),g.errors.address&&g.touched.address&&n.a.createElement("p",{className:"text-danger"},g.errors.address),n.a.createElement("input",{placeholder:"Apartment, suite, unit etc.",type:"text",name:"address1",value:g.values.address1,onChange:g.handleChange}),g.errors.address1&&g.touched.address1&&n.a.createElement("p",{className:"text-danger"},g.errors.address1))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"billing-info mb-20"},n.a.createElement("label",null,"Town / City"),n.a.createElement("input",{type:"text",name:"city",value:g.values.city,onChange:g.handleChange}),g.errors.city&&g.touched.city&&n.a.createElement("p",{className:"text-danger"},g.errors.city))),n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"billing-info mb-20"},n.a.createElement("label",null,"State"),n.a.createElement("input",{type:"text",name:"state",value:g.values.state,onChange:g.handleChange}),g.errors.state&&g.touched.state&&n.a.createElement("p",{className:"text-danger"},g.errors.state))),n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"billing-info mb-20"},n.a.createElement("label",null,"Postcode / ZIP"),n.a.createElement("input",{type:"number",name:"zip",value:g.values.zip,onChange:g.handleChange}),g.errors.zip&&g.touched.zip&&n.a.createElement("p",{className:"text-danger"},g.errors.zip)))),n.a.createElement("div",{className:"d-block"},n.a.createElement("div",{className:"custom-control custom-checkbox"},n.a.createElement("input",{id:"status1",name:"paymencheckbox tMethod",type:"checkbox",className:"custom-control-input",onClick:function(){return v(!N)},required:!0}),n.a.createElement("label",{className:"custom-control-label",for:"status1"},"Create an account?")),N?n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("p",{className:"pt-2"},"Create an account by entering the information below. If you are a returning customer please login at the top of the page."),n.a.createElement("div",{className:"billing-info mb-20"},n.a.createElement("label",null,"Account Password"),n.a.createElement("input",{type:"text",name:"password",value:g.values.password,onChange:g.handleChange}),g.errors.password&&g.touched.password&&n.a.createElement("p",{className:"text-danger"},g.errors.password)))):null),n.a.createElement("div",{className:"d-block my-3"},n.a.createElement("div",{className:"custom-control custom-checkbox"},n.a.createElement("input",{id:"credit",name:"paymencheckbox tMethod",type:"checkbox",className:"custom-control-input",onClick:function(){return p(!E)},required:!0}),n.a.createElement("label",{className:"custom-control-label",for:"credit"},"Ship To A Different Address?")),E?n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"billing-select mb-20 mt-2"},n.a.createElement("label",null,"Country"),n.a.createElement("select",{type:"email",name:"country",value:g.values.country,onChange:g.handleChange},n.a.createElement("option",null,"Select a country"),n.a.createElement("option",null,"Azerbaijan"),n.a.createElement("option",null,"Bahamas"),n.a.createElement("option",null,"Bahrain"),n.a.createElement("option",null,"Bangladesh"),n.a.createElement("option",null,"Barbados")),g.errors.country&&g.touched.country&&n.a.createElement("p",{className:"text-danger"},g.errors.country))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"billing-info mb-20"},n.a.createElement("label",null,"Street Address"),n.a.createElement("input",{className:"billing-address",placeholder:"House number and street name",type:"text",name:"address",value:g.values.address,onChange:g.handleChange}),g.errors.address&&g.touched.address&&n.a.createElement("p",{className:"text-danger"},g.errors.address),n.a.createElement("input",{placeholder:"Apartment, suite, unit etc.",type:"text",name:"address1",value:g.values.address1,onChange:g.handleChange}),g.errors.address1&&g.touched.address1&&n.a.createElement("p",{className:"text-danger"},g.errors.address1))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"billing-info mb-20"},n.a.createElement("label",null,"Town / City"),n.a.createElement("input",{type:"text",name:"city",value:g.values.city,onChange:g.handleChange}),g.errors.city&&g.touched.city&&n.a.createElement("p",{className:"text-danger"},g.errors.city))),n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"billing-info mb-20"},n.a.createElement("label",null,"State"),n.a.createElement("input",{type:"text",name:"state",value:g.values.state,onChange:g.handleChange}),g.errors.state&&g.touched.state&&n.a.createElement("p",{className:"text-danger"},g.errors.state))),n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"billing-info mb-20"},n.a.createElement("label",null,"Postcode / ZIP"),n.a.createElement("input",{type:"number",name:"zip",value:g.values.zip,onChange:g.handleChange}),g.errors.zip&&g.touched.zip&&n.a.createElement("p",{className:"text-danger"},g.errors.zip))),n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"billing-info mb-20"},n.a.createElement("label",null,"Phone"),n.a.createElement("input",{name:"phone",placeholder:"Mobile Number",type:"number",value:g.values.phone,onChange:g.handleChange}),g.errors.phone&&g.touched.phone&&n.a.createElement("p",{className:"text-danger"},g.errors.phone)))):null),n.a.createElement("div",{className:"additional-info-wrap"},n.a.createElement("h4",null,"Additional information"),n.a.createElement("div",{className:"additional-info"},n.a.createElement("label",null,"Order notes"),n.a.createElement("textarea",{placeholder:"Notes about your order, e.g. special notes for delivery. ",name:"notes",defaultValue:"",value:g.values.notes,onChange:g.handleChange}),g.errors.notes&&g.touched.notes&&n.a.createElement("p",{className:"text-danger"},g.errors.notes))))),n.a.createElement("div",{className:"col-lg-5"},n.a.createElement("div",{className:"your-order-area"},n.a.createElement("h3",null,"Your order"),n.a.createElement("div",{className:"your-order-wrap gray-bg-4"},n.a.createElement("div",{className:"your-order-product-info"},n.a.createElement("div",{className:"your-order-top"},n.a.createElement("ul",null,n.a.createElement("li",null,"Product"),n.a.createElement("li",null,"Total"))),n.a.createElement("div",{className:"your-order-bottom"},n.a.createElement("ul",null,n.a.createElement("li",{className:"your-order-shipping-new"},"Cocktail Yellow Dress"),n.a.createElement("li",null,"\u20b9450.00"))),n.a.createElement("div",{className:"your-order-bottom"},n.a.createElement("ul",null,n.a.createElement("li",{className:"your-order-shipping-new"},"Order Tax"),n.a.createElement("li",null,"0.00"))),n.a.createElement("div",{className:"your-order-bottom"},n.a.createElement("ul",null,n.a.createElement("li",{className:"your-order-shipping"},"Shipping"),n.a.createElement("li",null,"Free"))),n.a.createElement("div",{className:"your-order-total"},n.a.createElement("ul",null,n.a.createElement("li",{className:"order-total"},"Total"),n.a.createElement("li",null,"\u20b9450.00")))),n.a.createElement("div",{className:"d-block my-3"},n.a.createElement("div",{className:"custom-control custom-radio"},n.a.createElement("input",{id:"credit3",name:"credit3",type:"radio",className:"custom-control-input",checked:!0}),n.a.createElement("label",{className:"custom-control-label",for:"credit3"},"Cash on Delivery")),n.a.createElement("div",{className:"custom-control custom-radio"},n.a.createElement("input",{id:"credit2",name:"credit2",type:"radio",className:"custom-control-input"}),n.a.createElement("label",{className:"custom-control-label",for:"credit2"},"Net Banking")),n.a.createElement("div",{className:"custom-control custom-radio"},n.a.createElement("input",{id:"debit",name:"debit",type:"radio",className:"custom-control-input"}),n.a.createElement("label",{className:"custom-control-label",for:"debit"},"Debit card/Credit card")),n.a.createElement("div",{className:"custom-control custom-radio"},n.a.createElement("input",{id:"paypal",name:"paypal",type:"radio",className:"custom-control-input"}),n.a.createElement("label",{className:"custom-control-label",for:"paypal"},"PayPal"))),n.a.createElement("div",{className:"place-order mt-25"},n.a.createElement("button",{className:"btn-hover"},"Place Order")))))):n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"item-empty-area text-center"},n.a.createElement("div",{className:"item-empty-area__icon mb-30"},n.a.createElement("i",{className:"pe-7s-cash"})),n.a.createElement("div",{className:"item-empty-area__text"},"No items found in cart to checkout ",n.a.createElement("br",null)," ",n.a.createElement(c.b,{to:"/shop"},"Shop Now"))))))))))}))}}]);
//# sourceMappingURL=24.41610a49.chunk.js.map