import { Test, TestingModule } from '@nestjs/testing'
import { ClientsController } from '../../src/clients/client.controller'
import { ClientsService } from '../../src/clients/client.service'

const fakePosts = {
  name: 'teste',
  cpf: '11111',
  balance: 100,
}

const serviceMock = {
  findOne: jest.fn().mockReturnValue(fakePosts),
  create: jest.fn().mockReturnValue(fakePosts),
}

describe('PostsController', () => {
  let controller: ClientsController
  let service: ClientsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientsController],
      providers: [{ provide: ClientsService, useValue: serviceMock }],
    }).compile()

    controller = module.get<ClientsController>(ClientsController)
    service = module.get<ClientsService>(ClientsService)
  })

  describe('findOne', () => {
    it('should return an array of categories', async () => {
      const response = await controller.findOne('22773461878' as any)

      expect(service.findOne).toBeCalledTimes(1)
      expect(response).toEqual(fakePosts)
    })
  })

  describe('create', () => {
    it('should create a post and return', async () => {
      const fake = {
        name: 'teste',
        cpf: '111.111.111-11',
      }
      const response = await controller.create(fake as any)
      expect(response).toEqual(fakePosts)
    })
  })

  describe('findOne', () => {
    it('should return one post', async () => {
      expect(service.findOne).toHaveBeenCalled()
    })
  })
})
