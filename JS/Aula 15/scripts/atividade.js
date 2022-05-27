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
        itemDecButton.targetObject = this;
        itemDecButton.addEventListener( "click", this.decreaseItem );
        itemButtons.appendChild( itemDecButton );

        let itemIncButton = document.createElement( "button" );
        itemIncButton.classList = "btn btn-warning mx-2";
        itemIncButton.innerText = "+";
        itemIncButton.targetObject = this;
        itemIncButton.addEventListener( "click", this.increaseItem );
        itemButtons.appendChild( itemIncButton );

        let itemRemButton = document.createElement( "button" );
        itemRemButton.classList = "btn btn-danger";
        itemRemButton.innerText = "X";
        itemRemButton.targetObject = this;
        itemRemButton.addEventListener( "click", this.removeItem );
        itemButtons.appendChild( itemRemButton );

        let itemPrice = document.createElement( "li" );
        itemPrice.classList = "list-group-item d-flex justify-content-between align-items-center";
        itemPrice.innerText = "Quantidade: 0 = R$ 00,00";
        itemPrice.appendChild( itemButtons );
        this.itemPrice = itemPrice;

        itemInfoList.appendChild( itemInfo );
        itemPriceList.appendChild( itemPrice );

        this.getItemInfo();
    }

    getItemInfo ()
    {
        let name = itemNameInput.value;
        name = name.trim().replace( /\s+/, " " ) || "Novo Item";

        let value = Number( itemValueInput.value ) || 1;
        value = value > 1000 ? 1000 : value < 1 ? 1 : value;

        let quantity = Number( itemQuantityInput.value ) || 1;
        quantity = quantity > 100 ? 100 : quantity < 1 ? 1 : quantity;

        this.itemName = name;
        this.itemValue = value;
        this.itemQuantity = quantity;

        this.updateItemInfo();
        this.increaseTotalValue( quantity * value );
    }

    updateItemInfo ()
    {
        let itemValue = convertMoney.format( this.itemValue );
        let quantityValue = convertMoney.format( this.itemQuantity * this.itemValue );

        this.itemInfo.innerText = `${itemValue} = ${this.itemName}`;
        this.itemPrice.firstChild.nodeValue = `Quantidade: ${this.itemQuantity} = ${quantityValue}`;
    }

    increaseTotalValue ( value )
    {
        itemTotalValue.currentValue += value;
        itemTotalValue.innerText = convertMoney.format( itemTotalValue.currentValue );
    }

    decreaseTotalValue ( value )
    {
        itemTotalValue.currentValue -= value;
        itemTotalValue.innerText = convertMoney.format( itemTotalValue.currentValue );
    }

    increaseItem ()
    {
        if ( this.targetObject.itemQuantity >= 100 )
        {
            this.targetObject.itemQuantity = 100;
            return;
        }

        this.targetObject.itemQuantity ++;
        this.targetObject.updateItemInfo();
        this.targetObject.increaseTotalValue( this.targetObject.itemValue );
    }

    decreaseItem ()
    {
        if ( this.targetObject.itemQuantity <= 1 )
        {
            this.targetObject.itemQuantity = 1;
            return;
        }

        this.targetObject.itemQuantity --;
        this.targetObject.updateItemInfo();
        this.targetObject.decreaseTotalValue( this.targetObject.itemValue );
    }

    removeItem ()
    {
        let quantity = this.targetObject.itemQuantity;
        let value = this.targetObject.itemValue;
        this.targetObject.decreaseTotalValue( quantity * value );
        this.targetObject.itemInfo.remove();
        this.targetObject.itemPrice.remove();
    }
}

function createItem ( event )
{
    event.preventDefault();
    new Item();
    itemForm.reset();
}

const convertMoney = new Intl.NumberFormat( "pt-BR", { style: "currency", currency: "BRL" } );
const itemForm = document.getElementById( "item-form" )
const itemTotalValue = document.getElementById( "total-value" )
const itemInfoList = document.getElementById( "item-info" );
const itemPriceList = document.getElementById( "item-price" );
const itemNameInput = document.getElementById( "item-name" );
const itemValueInput = document.getElementById( "item-value" );
const itemQuantityInput = document.getElementById( "item-quantity" );
const itemAddButton = document.getElementById( "item-add" );

itemAddButton.addEventListener( "click", createItem );
itemTotalValue.currentValue = 0;

