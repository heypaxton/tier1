---
layout: default
title: Stackstone
---
<section class="section-panel products">
  <div class="container">
    <h1 class="section-heading">{{ page.title }}</h1>
    <h4>All the products listed below are either in inventory or in transit for inventory. Please select any category to view the product range.</h4>
    <p>
      Our world renowned Stackstone panels provide exceptional quality in a wide range of colors and finishes. These panels, made from the highest quality materials, are engineered for easy and reliable application, 
        and are durable in the most extreme climates. Our Stackstone panels are perfectly suited for interior and exterior application in commercial or residential spaces
    </p>
    <div class="card col s12 m6">
      <div class="card-content">
        <h4>Download the Catalog</h4>
        <a href="{{site.url}}/assets/downloads/stackstone_catalog.pdf" class="btn">View Catalog</a>
      </div>
    </div>
    
    <h6>Let us know about products you are interested in.</h6>
    <br>
    <form action="{{site.url}}/contact/success" name="contact" method="POST" netlify>
        <div class="row">
          <div class="input-field col s6">
            <input placeholder="Name" id="full_name" name="customer_name" type="text" class="validate">
            <label for="full_name">Name</label>
          </div>
          <div class="input-field col s6">
            <input placeholder="email@address.com" id="email" name="email" type="email" class="validate">
            <label for="email">Email</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s6">
            <input id="testing" name="testing" type="checkbox" value="testing">
            <label for="testing">Request testing</label>
          </div>
          <div class="input-field col s6">
            <input id="installation" name="installation" type="checkbox" value="yes">
            <label for="installation">Request installation instructions</label>
          </div>
        </div>
        <br>
        <div class="row">
          <div class="input-field col s6">
            <select name="query-type">
              <option value="" disabled selected>Select Query Type</option>
              <option value="Architect">Architect</option>
              <option value="Interior Designer">Interior Designer</option>
              <option value="Builder">Builder</option>
              <option value="Other">Other</option>
            </select>
            <label>Select Query Type</label>
          </div>

          <div class="input-field col s6">
            <input placeholder="Product name" name="product-interest" id="product-interest" type="text" class="validate">
            <label for="product-interest">Which product are you inquring about?</label>
          </div>
        </div>

        <div class="row">
          <div class="col s12">
            <label>Tell us about your project idea.</label>
          </div>
          <div class="input-field col s12">
            <textarea name="message" id="message"></textarea>
          </div>
        </div>

        <div class="row">
          <div class="col 212">
            <button type="submit" class="btn">Submit</button>
          </div>
        </div>
    </form>
  </div>
</section>