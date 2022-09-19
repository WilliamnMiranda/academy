import Api from '../helpers/api'
import { IInstructors} from '../interfaces/instructor'

const instructorServices = {
    get : async () => {
        const instructors: IInstructors[] = await (await Api.get('/instructor')).data
        return instructors
    },
}

export default instructorServices