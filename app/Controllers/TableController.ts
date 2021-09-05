import Table from 'App/Models/Table'
import TableValidator from 'App/Validator/TableValidator'
import CrudController from './Base/CrudController'

export default class TableController extends CrudController<
  TableValidator,
  typeof Table
>{

  constructor() {
    super(
      new TableValidator(),
      Table,
    )
  }

}
