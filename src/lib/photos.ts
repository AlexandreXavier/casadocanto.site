import { db } from "~/server/db";

export type Photo = {
  id: number
  name: string
  url: string
  createdAt:Date
  updatedAt:Date|null
}

const photos:Photo[]= await db.query.images.findMany({
  orderBy:(model,{desc})=> desc(model.id),
});


export default photos
