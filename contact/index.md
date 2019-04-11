---
layout: default
title: Contact Us
---
<div class="section section-panel">
  <div class="container">
    <h1 class="section-heading">{{ page.title }}</h1>
    <h6>Let us know about products you are interested in.</h6>
    <br>
    <form action="{{site.url}}/contact/success" name="contact" method="POST" netlify>
        <div class="row">
          <div class="input-field col s6">
            <input placeholder="Name" id="full_name" type="text" class="validate">
            <label for="full_name">Name</label>
          </div>
          <div class="input-field col s6">
            <input placeholder="email@address.com" id="email" type="email" class="validate">
            <label for="email">Email</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s6">
            <input id="testing" type="checkbox" value="testing">
            <label for="testing">Request testing</label>
          </div>
          <div class="input-field col s6">
            <input id="installation" type="checkbox" value="installation">
            <label for="installation">Request installation instructions</label>
          </div>
        </div>
        <br>
        <div class="row">
          <div class="input-field col s6">
            <select>
              <option value="" disabled selected>Select Query Type</option>
              <option value="1">Architect</option>
              <option value="2">Interior Designer</option>
              <option value="2">Builder</option>
              <option value="3">Other</option>
            </select>
            <label>Select Query Type</label>
          </div>

          <div class="input-field col s6">
            <input placeholder="Product name" id="product-interest" type="text" class="validate">
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
</div>
