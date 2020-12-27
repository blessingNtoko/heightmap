import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public scene = new THREE.Scene();
  public renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  public camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, .1, 1000);
  public controls = new OrbitControls(this.camera, this.renderer.domElement);

  ngOnInit() {

  }

  public init() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    this.controls.update();



    const animate = (time) => {
      time *= .001;

      this.controls.update();

      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }
}
