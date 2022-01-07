import { FulfillmentService } from "medusa-interfaces"
import CreativeHub from "../utils/creativehub"

class CreativeHubFulfillmentService extends FulfillmentService {
  static identifier = "creativehub"

  constructor({ logger, claimService, swapService, orderService }, options) {
    super()

    this.options_ = options
    console.log( 'options', options );

    /** @private @const {logger} */
    this.logger_ = logger

    /** @private @const {OrderService} */
    this.orderService_ = orderService

    /** @private @const {SwapService} */
    this.swapService_ = swapService

    /** @private @const {SwapService} */
    this.claimService_ = claimService

    /** @private @const {AxiosClient} */
    this.client_ = new CreativeHub( {
      baseURL: this.options_.baseURL,
      token: this.options_.api_token
    } )

  }

  getFulfillmentOptions() {
    return [
      {
        id: "creativehub-fulfillment",
      }
    ]
  }

  validateFulfillmentData(data, cart) {
    return data
  }

  validateOption(data) {
    return true
  }

  canCalculate() {
    return false
  }

  calculatePrice() {
    throw Error("CreativeHub Fulfillment service cannot calculatePrice")
  }

  createOrder() {
    // No data is being sent anywhere
    return Promise.resolve({})
  }

  createReturn() {
    // No data is being sent anywhere
    return Promise.resolve({})
  }

  createFulfillment() {
    // No data is being sent anywhere
    return Promise.resolve({})
  }

  cancelFulfillment() {
    return Promise.resolve({})
  }
}

export default CreativeHubFulfillmentService
