import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './schema/employee-schema';


@Controller('employee')
export class EmployeeController {
    constructor(private employeeService: EmployeeService){}

    @Get()
    async getAll(){
        return await this.employeeService.getAll();
    }

    @Post()
    async create(@Body() employee: Employee) {
        return await this.employeeService.create(employee);
    }

    @Get('/:id')
    async getById(@Param('id') id: string){
        return await this.employeeService.getById(id);
    }

    @Put('/:id')
    async update(@Param('id') id: string, @Body() employee: Employee){
        return await this.employeeService.update(id, employee);
    }

    @Delete('/:id')
    async delete(@Param('id') id: string){
        return await this.employeeService.delete(id);
    }
}
