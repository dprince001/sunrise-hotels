import { createClient } from "@sanity/client"

const config = {
    projectId: '2tyvmvhe',
    dataset: 'production',
    useCdn: true
}

const client = createClient(config)


export default client
