export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type:  'string',
            title: 'Title of Blog',
        },
        {
            name: 'slug',
            type: 'slug',
            title:'Slug of Blog',
            options: {
                source: 'title'
            }
        },
        {
            name: 'titleImage',
            type: 'image',
            title: "Image Name"
        },
        {
            name: 'shortDescription',
            type: 'string',
            title: 'Short Description'
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
               {
                type: 'block'
               } 
            ]
        }
       

    ]
}