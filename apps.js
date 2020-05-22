const products_API = 'https://acme-users-api-rev.herokuapp.com/api/products';
const companies_API = 'https://acme-users-api-rev.herokuapp.com/api/companies';
const root = document.querySelector('#root');

class Counter extends React.Component{
    state={
        prodCount:0,
        compCount:0,

    }

        
    
    render(){
     const {compCount}=this.props;
     const{prodCount}=this.props;
     return React.createElement(

         'span',                               //COUNTING THE AMOUNT OF COMPANIES AND PRODUCTS
         null,
         `Acme -we have ${prodCount} Products and ${compCount} Companies`

     )
    }

  }

class ProductList extends React.Component {
    state = {
           
            products: [],                                 //CREATING PRODUCT LIST
        }

    componentDidMount() {
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
    

    render () {
        const prodMap =  this.state.products.map(elem => {
           return React.createElement('li', null, elem);
        
    })
        return React.createElement('ul', null, ...prodMap)
}
}

class CompanyList extends React.Component {
    state = {
         companies: [],
         
     }
                                               //CREATING COMPANY LIST
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
    }


render () {
    const compMap =  this.state.companies.map(elem => {
       return React.createElement('li', null, elem);
    
})
    return React.createElement('ul', null, ...compMap)
}
}

// class Nav extends React.Component {

// }


class List extends React.Component {
    constructor () {
        super();
        this.state = {
            companies: [],
            products: [],
            compCount:0,
            prodCount:0,
           
        };
        /*this.incrementProd=this.incrementProd.bind(this);
        this.incrementComp=this.incrementComp.bind(this)*/

    }
    setCountComp(compCount){
        this.setState({compCount})
    }
    setCountProd(prodCount){
        this.setState({prodCount})
    }
     /*incrementProd(){
         const {prodCount}=this.state;
         this.setState({
             prodCount:prodArr.length
         })
        }
         incrementComp(){
            const {compCount}=this.state;
            this.setState({
                compCount:compArr.length
            })

    }*/

render(){
    const { companies, products ,compCount,prodCount} = this.state;
    // return React.createElement (
    //     'ul',
    //     null,
    //     products.map((product) => {
    //         console.log(product)
    //     })
    // )
    // const nav = React.createElement(Nav, { companies, products, view});
    // let chosenView;
    // if (view === 'companies') {
    //     chosenView = React.createElement(CompanyList, { companies });

    // }
    // if (view === 'products') {
    //     chosenView = React.createElement(ProductList, { products });
    // }
    return React.createElement('div', null, React.createElement(Counter,{prodCount,compCount,}),React.createElement(ProductList),React.createElement(CompanyList));
   // return React.createElement('div', null, React.createElement(ProductList));
}
}
ReactDOM.render(React.createElement(List), root);
