import { EntityRepository } from 'typeorm';
import { AbstractPolymorphicRepository } from '../../src/polymorphic.repository';
import { AdvertEntity } from '../entities/advert.entity';

@EntityRepository(AdvertEntity)
export class AdvertRepository extends AbstractPolymorphicRepository<AdvertEntity> {}
