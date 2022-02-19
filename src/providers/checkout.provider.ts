import * as mercadopago from 'mercadopago'

export class CheckoutProvider {

	public static create() {
		try {
			mercadopago.configure({
				access_token: ''
			})
		
			let preference = {
				items: [
					{
						title: 'Meu produto',
						unit_price: 100,
						quantity: 1,
					}
				]
			}

			mercadopago
			.preferences
			.create(preference)
			.then(function(response){
				console.log('response ======>')
				console.log(response)
				console.log('response.body.id')
				console.log(response.body.id)
			}).catch(function(error){
				console.log(error);
			})
		} catch (error) {
			throw error
		}
	}
}