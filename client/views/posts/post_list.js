var postsData = [
    {
    title:'Introducting Telescope',
    author: 'Sacha Greif',
    url: 'http://sachagreif.com/introducting-telescope/'
    },
    
    {
        title:'Meteor',
        author:'Tom Coleman',
        url:'http://meteor.com'
    },
    
    {
        title:'The Meteor Book',
        author: 'Tom Coleman',
        url: 'http://themeteorbook.com'
    }
];

Template.postsList.helpers({
    posts:postsData
});

