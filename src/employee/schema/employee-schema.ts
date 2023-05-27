import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmployeeDocument = Employee & Document;

@Schema({collection: "Employee"})

export class Employee {
    @Prop()
    name: string;

    @Prop()
    role: string;

    @Prop()

    experience: number
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
