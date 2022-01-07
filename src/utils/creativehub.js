import axios from "axios"

class CreativeHub {
  constructor({ baseURL, token }) {
    this.token_ = token
    this.client_ = axios.create({
      baseURL: `${baseURL}`,
      headers: {
        "content-type": "application/json",
        Authorization: `ApiKey ${token}`,
      },
    })

    this.orders = this.buildOrderEndpoints_()
    this.deliveryOptions = this.buildDeliveryOptionEndpoints_()
  }

  async request(data) {
    return this.client_(data).then(({ data }) => data)
  }

  buildOrderEndpoints_ = () => {
    return {
      retrieve: async (id) => {
        const path = `/api/v1/orders/${id}`
        return this.client_({
          method: "GET",
          url: path,
        }).then(({ data }) => data)
      },
      create: async (data) => {
        const path = `/api/v1/orders`
        return this.client_({
          method: "POST",
          url: path,
          data: {
            data,
          },
        }).then(({ data }) => data)
      },
      delete: async (id) => {
        const path = `/api/v1/orders/${id}`
        return this.client_({
          method: "DELETE",
          url: path,
        }).then(({ data }) => data)
      },
    }
  }

  buildDeliveryOptionEndpoints_ = () => {
      return {
          retrieve: async (id) => {
            const path = `/api/v1/deliveryoptions/${id}`
            return this.client_({
              method: "GET",
              url: path,
            }).then(({ data }) => data)
        },
          list: async() => {
              const path = `/api/v1/deliveryoptions/query`
              return this.client_({
                method: "GET",
                url: path,
              }).then(({ data }) => data)
          }
      }
  }

}

export default CreativeHub
