// ----------------sothongtin---------------
document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        const accordionItems = document.querySelectorAll('.accordion-item');
        const mapIframe = document.getElementById('map-iframe');

        accordionItems.forEach(item => {
            item.querySelector('.accordion-header').addEventListener('click', function () {
                accordionItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                
                if (item.classList.contains('item-1')) {
                    mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.9346426021046!2d106.69424602132159!3d10.814810738876835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f770dd2ab05%3A0xe287429c5efc217f!2sFPT%20Arena%20Multimedia!5e0!3m2!1svi!2s!4v1721230466694!5m2!1svi!2s";
                } else if (item.classList.contains('item-2')) {
                    mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.321704151127!2d106.66373777570327!3d10.786654159003591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752edac37c5025%3A0xd5fab66e51e1049d!2zTeG7uSB0aHXhuq10IMSRYSBwaMawxqFuZyB0aeG7h24gRlBUIEFyZW5h!5e0!3m2!1svi!2s!4v1721230497079!5m2!1svi!2s";
                }
            });
        });
    });
});
// ----------------sothongtin---------------

function initMap(){
    
    const centerMap = { lat: 10.8147422,lng: 106.694234 }

    const mapOption = {
        center: centerMap,
        zoom: 10,
        disableDefaultUI:true
    }

    const map = new google.maps.Map(document.getElementById('google-map'),mapOption);

}



document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');
    const mapIframe = document.getElementById('map-iframe');

    accordionItems.forEach(item => {
        item.querySelector('.accordion-header').addEventListener('click', function () {
            accordionItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            if (item.classList.contains('item-1')) {
                mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7837.909556492317!2d106.68954488399528!3d10.81477273100733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f770dd2ab05%3A0xe287429c5efc217f!2sFPT%20Arena%20Multimedia!5e0!3m2!1svi!2sus!4v1721210379148!5m2!1svi!2sus";
            } else if (item.classList.contains('item-2')) {
                mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.8312799289423!2d106.66542395762359!3d10.786392074352639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752edac37c5025%3A0xd5fab66e51e1049d!2zTeG7uSB0aHXhuq10IMSRYSBwaMawxqFuZyB0aeG7h24gRlBUIEFyZW5h!5e0!3m2!1svi!2s!4v1721221713676!5m2!1svi!2s";
            }
        });
    });
});