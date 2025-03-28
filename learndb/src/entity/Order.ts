import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany, ManyToOne} from "typeorm"
import { OrderItem } from "./OrderItem"
import { User } from "./User"

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    total: number

    @Column()
    qty: number
    
    @CreateDateColumn()
    created : Date

    @UpdateDateColumn()
    updated : Date

    @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
    orderItems: OrderItem[]
    @ManyToOne(() => User, (user) => user.orders)
    user: User;
}
