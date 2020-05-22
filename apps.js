const products_API = 'https://acme-users-api-rev.herokuapp.com/api/products';
const companies_API = 'https://acme-users-api-rev.herokuapp.com/api/companies';
const root = document.querySelector('#root');

class Counter extends React.Component{
    /*state={
        products:[],
        companies:[],

    }*/

        
    
    render(){
     const {companies}=this.props;
     const{products}=this.props;
     return React.createElement(

         'span',                               //COUNTING THE AMOUNT OF COMPANIES AND PRODUCTS
         null,
         `Acme -we have ${products.length} Products and ${companies.length} Companies`

     )
    }

  }

class ProductList extends React.Component {
   
                                               //CREATING PRODUCT LIST
  
    

    render () {
        const prodMap =  this.props.state.products.map(elem => {
           return React.createElement('li', null, elem);
        
    })
        return React.createElement('ul', null, ...prodMap)
}
}

class CompanyList extends React.Component {
 
                                               //CREATING COMPANY LIST



render () {
    const compMap =  this.props.state.companies.map(elem => {
       return React.createElement('li', null, elem);
    
})
    return React.createElement('ul', null, ...compMap)
}
}




class List extends React.Component {
    constructor () {
        super();
        this.state = {
            companies: [],
            products: [],
           // compCount:0,
           // prodCount:0,
           
        };
        

    }
    componentDidMount() {
        fetch(companies_API)
        .then(company => {
            return company.json();
        }).then((data) => {
            console.log(data);
            let compArr = [];
            data.map(comp => {
            compArr.push(comp.name);
             
           })
           this.setState({ companies: compArr});
        })
         fetch(products_API)
         .then(product => {
            return product.json();
           }).then((data) => {
            console.log(data);
            let prodArr = [];
            data.map(prod => {
            prodArr.push(prod.name);
             
           })
           this.setState({ products: prodArr});
            
        })
        

        }
   

render(){
    const { companies, products } = this.state;

    return React.createElement('div', null, React.createElement(Counter,{products,companies,}),React.createElement(ProductList,{products,}),React.createElement(CompanyList,{companies,}));
   
}
}
ReactDOM.render(React.createElement(List), root);
