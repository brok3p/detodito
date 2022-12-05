const Payment = ({tag_invoicenumber, submit}) => {

    const handleSubmit = async(event) => {
        console.log(event);
        event.preventDefault();
        
        submit();
    }

    return (
        <div className="payment">
            <a name="makepayment"></a>
            <div className="paymenthead">
                Pago con Tarjeta
                <hr />
            </div>

            <form onSubmit={handleSubmit}>

                <div className="type">
                    Seleccione su tipo de tarjeta:*<br />
                    <input type="radio" name="CardType" id="CardType" className="cat_radio" value="1" aria-label="cardtype" />
                    <img src="https://w7.pngwing.com/pngs/314/877/png-transparent-visa-logo-credit-card-debit-card-mastercard-logo-visa-go-blue-text-trademark.png" />

                    <input type="radio" name="CardType" id="CardType" className="cat_radio" value="2" aria-label="cardtype" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png" />

                    <input type="radio" name="CardType" id="CardType" className="cat_radio" value="3" aria-label="cardtype" />
                    <img src="https://cdn4.iconfinder.com/data/icons/simple-peyment-methods/512/amex_american_express-512.png" />
                </div>


                <div className="email">
                    <input type="hidden" name="EmailAddress" id="EmailAddress" className="cat_textbox" />
                </div>

                <div className="invoicepay">
                    Ingrese el número de pedido y la cantidad que desea pagar*:
                    <input type="text" name="InvoiceNumber" id="InvoiceNumber" className="cat_textbox" value={tag_invoicenumber} aria-label="cardtype" />
                    <input type="text" name="Amount" id="Amount" className="cat_textbox" placeholder="0.00" /> <br />
                    <p> <i>Ingrese la cantidad que desea pagar sin ningún símbolo, por ejemplo: 10.00</i></p>
                </div>


                <div className="cardname">
                    Nombre tal y como aparece en tu tarjeta*:<br />
                    <input type="text" name="CardName" id="CardName" className="cat_textbox" aria-label="cardtype" />
                </div>

                <div className="cardnumber">
                    Por favor ingrese su número de tarjeta:<br />
                    <input type="text" name="CardNumber" id="CardNumber" className="cat_textbox" aria-label="cardtype" />

                </div>

                <div className="expiry">
                    Vencimiento tarjeta: <br />
                    <select name="CardExpiryMonth" id="CardExpiryMonth" className="cat_dropdown_smaller" aria-label="cardtype">
                        <option value="01">01 - Jan</option>
                        <option value="02">02 - Feb</option>
                        <option value="03">03 - Mar</option>
                        <option value="04">04 - Apr</option>
                        <option value="05">05 - May</option>
                        <option value="06">06 - Jun</option>
                        <option value="07">07 - Jul</option>
                        <option value="08">08 - August</option>
                        <option value="09">09 - Sep</option>
                        <option value="10">10 - Oct</option>
                        <option value="11">11 - Nov</option>
                        <option value="12">12 - Dec</option>
                    </select><br />
                    <select name="CardExpiryYear" id="CardExpiryYear" className="cat_dropdown_smaller" aria-label="cardtype">
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                    </select>
                </div>

                <div className="cvv">
                    Núm. Seguridad tarjeta:<br />
                    <input type="text" name="CardCCV" id="CardCCV" className="cat_textbox" aria-label="cardtype" />
                </div>

                <div className="submit">
                    <input className="cat_button" type="submit" value="Realizar Pedido" id="catwebformbutton" />
                </div>
            </form>

        </div>
    );
}
export default Payment;