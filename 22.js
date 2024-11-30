const categoryData = {
    "stressManagement": {
        title: "Stress Management",
        images: ["images/clothing1.jpg", "images/clothing2.jpg"],
        description: `
            <h2>Stress Management for Women</h2>
            <p>Life can get overwhelming at times, especially when balancing work, family, and personal goals. It’s important to recognize the signs of stress and manage them effectively. Here are some helpful tips:</p>
            <ul>
                <li><strong>Recognize Stress Symptoms:</strong> Notice how your body and mind react to stress. Common signs include irritability, tiredness, headaches, and feeling overwhelmed.</li>
                <li><strong>Prioritize Self-Care:</strong> Taking time for yourself—whether it’s a hobby, a walk, or simply relaxing—is essential to recharge.</li>
                <li><strong>Exercise:</strong> Physical activity releases feel-good hormones, so try to incorporate movement into your daily routine to ease stress.</li>
                <li><strong>Practice Mindfulness:</strong> Meditation or breathing exercises can help you relax and regain mental clarity.</li>
                <li><strong>Set Boundaries:</strong> It’s okay to say no. Setting healthy boundaries is key to maintaining your energy and preventing burnout.</li>
                <li><strong>Connect with Others:</strong> Talking with friends or a support network can help you feel heard and reduce stress levels.</li>
            </ul>
            <p>Remember, stress is a natural part of life, but managing it effectively can lead to better physical, emotional, and mental health. Prioritize your well-being and take steps towards a balanced lifestyle.</p>
        `
    },

     "bagEssentials": { title: "Bag Essentials", images: ["images/waterBottle.jpg", "images/notebook.jpg"], description: ` <h2>Important Things to Keep in Your Bag</h2> <p>Having a well-prepared bag can make a big difference in your day. Here are some essential items to carry with you:</p> <ul> <li><strong>Water Bottle:</strong> Stay hydrated throughout the day.</li> <li><strong>Notebook and Pen:</strong> For jotting down notes, reminders, or inspiration.</li> <li><strong>Wallet:</strong> Keep your ID, money, and essential cards secure.</li> <li><strong>Phone and Charger:</strong> Stay connected and ensure you can charge on the go.</li> <li><strong>Sanitizer and Face Mask:</strong> For health and hygiene.</li> <li><strong>Snacks:</strong> Carry healthy snacks like nuts or granola bars for a quick energy boost.</li> <li><strong>Personal Hygiene Items:</strong> Such as tissues, hand wipes, and feminine hygiene products.</li> <li><strong>Emergency Contact Information:</strong> A list of important phone numbers and contacts.</li> <li><strong>Medications:</strong> Any necessary medications, including a small first-aid kit.</li> <li><strong>Portable Power Bank:</strong> To keep your devices charged when an outlet is unavailable.</li> <li><strong>Keys:</strong> Don’t forget your house or car keys.</li> <li><strong>Sunglasses and Sunscreen:</strong> Protect your eyes and skin from the sun.</li> <li><strong>Reusable Shopping Bag:</strong> Handy for any unexpected purchases.</li> <li><strong>Umbrella or Raincoat:</strong> Stay dry in unexpected weather.</li> </ul> <p>Being prepared can help you tackle your day with confidence. Make sure your bag is equipped with these essentials to handle whatever comes your way.</p> `
     },
    "govSchemesMaharashtra": { title: "Government Schemes for Women in Maharashtra", images: ["images/govScheme1.jpg", "images/govScheme2.jpg"], description: ` <h2>Government Schemes for Women in Maharashtra</h2> <p>The government of Maharashtra has implemented several schemes to empower women and improve their socio-economic status. Here are some key schemes:</p> <ul> <li><strong>Maharashtra State Women Empowerment Policy:</strong> Aims to empower women through initiatives such as skill development, entrepreneurship, and access to resources.</li> <li><strong>Mahila E-Haat:</strong> An online marketing platform for women entrepreneurs to showcase and sell their products.</li> <li><strong>Mahila Arthik Vikas Mahamandal (MAVIM):</strong> Provides financial assistance and support for women's self-help groups to promote economic development.</li> <li><strong>Ujjwala Yojana:</strong> Provides free LPG connections to women from Below Poverty Line (BPL) households to ensure clean cooking fuel.</li> <li><strong>Beti Bachao, Beti Padhao:</strong> A nationwide campaign to promote the education and welfare of girl children.</li> <li><strong>Maharashtra Women's Economic Development Corporation (WEDC):</strong> Offers loans and financial assistance to women entrepreneurs and self-help groups.</li> <li><strong>Sukanya Samriddhi Yojana:</strong> A savings scheme for the girl child, encouraging parents to save for their daughter's future.</li> <li><strong>Maharashtra Rajya Mahila Kamgar Sangh:</strong> Provides support and resources for women workers, including training and legal assistance.</li> </ul> <p>These schemes aim to empower women and improve their socio-economic status. Make sure to take advantage of these resources for a better future.</p> `
    }
    // Add more categories as needed
};

function showModal(category) {
    const modal = document.getElementById("infoModal");
    const title = document.getElementById("categoryTitle");
    const description = document.getElementById("categoryDescription");
    const imagesContainer = document.querySelector(".modal-images");

    // Set modal content
    title.textContent = categoryData[category].title;
    description.innerHTML = categoryData[category].description;

    // Clear previous images and load new ones
    imagesContainer.innerHTML = '';
    categoryData[category].images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `${categoryData[category].title} Image`;
        imagesContainer.appendChild(img);
    });

    // Show modal
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("infoModal").style.display = "none";
}

function openContactModal() {
    document.getElementById("contactModal").style.display = "flex";
}

function closeContactModal() {
    document.getElementById("contactModal").style.display = "none";
}

// Add event listener to the contact button
document.querySelector('.contact-btn').addEventListener('click', openContactModal);

document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.getElementById("typingParagraph");
    const text = paragraph.textContent;
    paragraph.textContent = ''; // Clear the paragraph text

    let index = 0;
    function type() {
        if (index < text.length) {
            paragraph.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust typing speed here
        }
    }

    type();
});
