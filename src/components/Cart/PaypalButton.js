import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
 
export default class MyApp extends React.Component {
    render() {
        const onSuccess = (payment) => {
            		console.log("The payment was succeeded!", payment);
        }
 
        const onCancel = (data) => {
            console.log('The payment was cancelled!', data);
        }
 
        const onError = (err) => {
            console.log("Error!", err);
        }
 
        let env = 'sandbox'; 
        let currency = 'USD'; 
        let total = 1; 
 
        const client = {
            sandbox:    'AbU57L1rgTnKHpQ0SXydtN71jhH3lcS1bFGK4_1IharQOYdDrmZbi661-TQaFW5G4dJ4rnsw6Wr-UPw2',
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        return (
            <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        );
    }
}