const footer = document.querySelector(".footer");

footer.innerHTML = `

<footer class="bg-[#0F2748] text-white relative overflow-hidden">

    <!-- Background Glow -->

    <div class="absolute top-0 left-0 w-72 h-72 bg-[#56B4E9]/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#B12A2A]/10 rounded-full blur-3xl"></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-16 relative z-10">

       <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
            <!-- Clinic Info -->

            <div>

                <img
                    src="https://ik.imagekit.io/5f5fo2fhm/dr.kavitalogo.jpeg"
                    alt="Kaizen Kidney Clinic"
                    class="h-20 bg-white p-2 rounded-xl">

                <p class="mt-6 text-white/80 leading-relaxed">
                    Kaizen Kidney & BP Clinic provides compassionate,
                    evidence-based kidney care focused on prevention,
                    early diagnosis and long-term patient wellness.
                </p>

            </div>

            <!-- Quick Links -->

            <div>

                <h3 class="font-bold text-xl mb-6">
                    Quick links
                </h3>

                <ul class="space-y-3 text-white/80">

                    <li>
                        <a href="index.html"
                            class="hover:text-white transition">
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="about.html"
                            class="hover:text-white transition">
                            About us
                        </a>
                    </li>

                    <li>
                        <a href="services.html"
                            class="hover:text-white transition">
                            Services
                        </a>
                    </li>

                    <li>
                        <a href="conditions.html"
                            class="hover:text-white transition">
                            Conditions
                        </a>
                    </li>
                

                    <li>
                        <a href="contact.html"
                            class="hover:text-white transition">
                            Contact
                        </a>
                    </li>

                </ul>

            </div>

            <!-- Services -->

            <div>

                <h3 class="font-bold text-xl mb-6">
                    Services
                </h3>

               <ul class="space-y-3 text-white/80">

    <li>
        <a href="kidney-disease-management.html" class="hover:text-white transition">
            Kidney disease management
        </a>
    </li>

    <li>
        <a href="blood-pressure-management.html" class="hover:text-white transition">
            Blood pressure management
        </a>
    </li>

    <!-- NEW PAGE 1 -->
    <li>
        <a href="diabetes-kidney-disease.html" class="hover:text-white transition">
            Diabetes & kidney disease
        </a>
    </li>

    <li>
        <a href="dialysis-consultation.html" class="hover:text-white transition">
            Dialysis consultation
        </a>
    </li>

    <li>
        <a href="kidney-transplant-care.html" class="hover:text-white transition">
            Kidney transplant care
        </a>
    </li>

   

</ul>
            </div>
            <!-- Patient Resources -->

<div>

    <h3 class="font-bold text-xl mb-6">
        Resources
    </h3>

    <ul class="space-y-3 text-white/80">

        <li>
            <a href="faq.html" class="hover:text-white transition">
                Frequently Asked Questions
            </a>
        </li>

        <li>
            <a href="patient-resources.html" class="hover:text-white transition">
                Patient Resources
            </a>
        </li>

        <li>
            <a href="affiliations.html" class="hover:text-white transition">
                Affiliations
            </a>
        </li>

    </ul>

</div>

            <!-- Contact -->

            <div>

                <h3 class="font-bold text-xl mb-6">
                    Contact us
                </h3>

                <div class="space-y-4 text-white/80">

                    <p class="flex items-start gap-3">

                        <i class="fa-solid fa-phone text-[#56B4E9] mt-1"></i>

                        <a href="tel:+919326609636"
                            class="hover:text-white transition">

                            +91 9326609636

                        </a>

                    </p>

                    <p class="flex items-start gap-3">

                        <i class="fa-solid fa-envelope text-[#56B4E9] mt-1"></i>

                        <a href="mailto:kaizenkidneyclinic@gmail.com"
                            class="hover:text-white transition">

                            kaizenkidneyclinic@gmail.com

                        </a>

                    </p>

                    <p class="flex items-start gap-3">

                        <i class="fa-solid fa-location-dot text-[#56B4E9] mt-1"></i>

                        Mumbai, Maharashtra

                    </p>

                </div>

                <!-- Social Icons -->
<div class="flex gap-4 mt-6">
    <a href="https://www.instagram.com/askyournephrologist?igsh=MTJsMHNvNnAxcjluMw=="
        target="_blank"
        class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 hover:bg-[#56B4E9] transition">

        <i class="fab fa-instagram text-lg"></i>
        <span>@askyournephrologist</span>

    </a>
</div>
 

            </div>
            

        </div>
       

        <!-- Bottom -->

        <div
            class="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">

            <p>
                © 2026 Kaizen Kidney & BP Clinic.
                All Rights Reserved.
            </p>

            <p>
                Designed & Developed with ❤️
            </p>

        </div>

    </div>

</footer>

<!-- WhatsApp Button -->

<a href="https://wa.me/919326609636"
    target="_blank"
    class="fixed bottom-16 right-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl shadow-2xl z-50 hover:scale-110 transition duration-300">

    <i class="fab fa-whatsapp"></i>

</a>

`;