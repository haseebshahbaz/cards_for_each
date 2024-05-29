document.addEventListener("DOMContentLoaded", function() {
    var cardData = [
        {
            title: "1. YouTube",
            description: "YouTube is an American online video sharing platform owned by Google. Accessible worldwide, YouTube launched on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim, three former employees of PayPal.",
            image: "https://cdn-icons-png.flaticon.com/256/1384/1384060.png"
        },
        {
            title: "2. Instagram",
            description: "Instagram is a social media platform for sharing photos, videos, and stories. Launched in 2010 and acquired by Facebook in 2012, it emphasizes visual content with features like filters, IGTV, Reels, and direct messaging. It’s widely used for personal, business, and influencer engagement.",
            image: "https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_640.jpg"
        },
        {
            title: "3. Twitter",
            description: "Twitter, Inc. was an American social media company based in San Francisco, California, which operated and was named for its flagship social media network prior to its rebrand as X. In addition to Twitter, the company previously operated the Vine short video app and Periscope livestreaming service.",
            image: "https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716768000&semt=ais_user"
        },
        {
            title: "4. Facebook",
            description: "Meta Platforms, Inc., doing business as Meta, and formerly named Facebook, Inc., and TheFacebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California. The company owns and operates Facebook, Instagram, Threads, and WhatsApp, among other products and services.",
            image: "https://cdn-icons-png.flaticon.com/256/124/124010.png"
            
        },
        {
            title: "5. TikTok",
            description: "TikTok is a social media platform for creating, sharing and discovering short videos. The app is used by young people as an outlet to express themselves through singing, dancing, comedy, and lip-syncing, and allows users to create videos and share them across a community.",
            image: "https://thumbs.dreamstime.com/b/tiktok-social-media-app-icon-tiktok-social-media-app-icon-square-shape-vector-illustration-269930887.jpg"
            
        },
        {
            title: "6. Threads",
            description: "Threads is an online social media and social networking service operated by Meta Platforms. The service features integration with Instagram and users must register for Threads with an Instagram account.",
            image: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/threads-app-icon.png"
            
        },

    ];

    var cardContainer = document.getElementById('card-container');

    cardData.forEach(function(card) {
        var cardElement = document.createElement('div');
        cardElement.classList.add('card');

        cardElement.innerHTML = `
            <img src="${card.image}" alt="${card.title}">
            <div class="card-content">
                <h3>${card.title}</h3>
                <p>${card.description}</p>
            </div>
        `;

        cardContainer.appendChild(cardElement);
    });
});
