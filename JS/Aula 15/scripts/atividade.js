class Item
{
    constructor ()
    {
        let itemInfo = document.createElement( "li" );
        itemInfo.classList = "list-group-item d-flex align-items-center";
        itemInfo.innerText = "R$ 00,00 = Novo Item";
        this.itemInfo = itemInfo;

        let itemButtons = document.createElement( "div" );
        itemButtons.classList = "list-buttons";

        let itemDecButton = document.createElement( "button" );
        itemDecButton.classList = "btn btn-warning";
        itemDecButton.innerText = "-";
        itemDecButton.addEventListener( "click", this.decreaseItem );
        itemButtons.appendChild( itemDecButton );

        let itemIncButton = document.createElement( "button" );
        itemIncButton.classList = "btn btn-warning mx-2";
        itemIncButton.innerText = "+";
        itemIncButton.addEventListener( "click", this.increaseItem );
        itemButtons.appendChild( itemIncButton );

        let itemRemButton = document.createElement( "button" );
        itemRemButton.classList = "btn btn-danger";
        itemRemButton.addEventListener( "click", this.removeItem );
        itemRemButton.innerText = "X";
        itemButtons.appendChild( itemRemButton );

        let itemPrice = document.createElement( "li" );
        itemPrice.classList = "list-group-item d-flex justify-content-between align-items-center";
        itemPrice.innerText = "Quantidade: 0 = R$ 00,00";
        itemPrice.appendChild( itemButtons );
        this.itemPrice = itemPrice;

        itemInfoList.appendChild( itemInfo );
        itemPriceList.appendChild( itemPrice );
        itemList.push( this );

        // this.getItemInfo()
    }

    getItemInfo ()
    {

        let name = itemNameInput.value;
        name = name.trim().replace( /\s+/, " " );

        let value = itemValueInput.value;
        value = value > 1000 ? 1000 : value < 0 ? 0 : value;

        let quantity = itemQuantityInput.value;
        quantity = quantity > 100 ? 100 : quantity < 0 ? 0 : quantity;

        this.itemName = name;
        this.itemValue = value;
        this.itemQuantity = quantity;
        this.updateItemInfo()
    }

    updateItemInfo ()
    {
        let convertMoney = new Intl.NumberFormat( "pt-BR", { style: "currency", currency: "BRL" } );
        let itemValue = convertMoney.format( this.itemValue );
        let quantityValue = convertMoney.format( this.itemQuantity * this.itemValue );

        this.itemInfo.innerText = `${itemValue} = ${this.itemName}`;
        this.itemPrice.innerText = `Quantidade: ${this.itemQuantity} = ${quantityValue}`;
    }

    increaseItem ( event )
    {
        event.preventDefault();
        this.itemQuantity --;
        this.updateItemInfo();
    }

    decreaseItem ( event )
    {
        event.preventDefault();
        this.itemQuantity ++;
        this.updateItemInfo();
    }

    removeItem ( event )
    {
        event.preventDefault();
        event.target.remove();
    }
}

function addItem ( event )
{
    event.preventDefault();
    new Item();
}

const itemList = [];
const itemInfoList = document.getElementById( "item-info" );
const itemPriceList = document.getElementById( "item-price" );

const itemNameInput = document.getElementById( "item-name" );
const itemValueInput = document.getElementById( "item-value" );
const itemQuantityInput = document.getElementById( "item-quantity" );
const addItemButton = document.getElementById( "add-item" );

addItemButton.addEventListener( "click", addItem );
