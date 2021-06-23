
import { Controller } from  '../controllers/protocols/controller'
import { Request, Response, RequestHandler } from 'express'

export const adaptRoute = (controller: Controller): RequestHandler => {
  return async (req: Request) => {
    const httpResponse = await controller.handle(req)
    return httpResponse
  }
}