import { Types } from "mongoose"
import Modal from "./Modal"
export default function page({ params }: { params: { id: Types.ObjectId } }) {
  return (
    <div>
      <Modal></Modal>
    </div>
  )
}
