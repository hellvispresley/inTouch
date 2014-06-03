if (Posts.find().count() === 0) {
    Posts.insert({
        title:'Introducting Telescope',
        author: 'Sacha Greif',
        url: 'http://sachagreif.com/introducing-telescope/'
        });
        
    Post.insert({
        title: 'Meteor',
        author: 'Tom Coleman',
        url: 'http://meteor.com'
        });
        
    Post.insert ({
        title: 'The Meteor Book',
        author: 'Tom Coleman',
        url: 'http://themeteorbook.com'
        });
    }
