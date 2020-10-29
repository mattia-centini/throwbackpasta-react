import React, { useState } from 'react';
import './MyCalendar.css'

 
function MyCalendar() {
  


    return (
      <div className='myCalendar'>
        <h3>November 2020</h3>
          <div class="day-of-week">
            <div>Su</div>
            <div>Mo</div>
            <div>Tu</div>
            <div>We</div>
            <div>Th</div>
            <div>Fr</div>
            <div>Sa</div>
          </div>

          <div class="date-grid">
           <time datetime="2019-02-01">1
           <p>Pasta Workshop 14:00-16:00</p>
           </time>
           <time datetime="2019-02-02">2</time>
           <time datetime="2019-02-03">3</time>
           <time datetime="2019-02-03">4</time>
           <time datetime="2019-02-03">5</time>
           <time datetime="2019-02-03">6</time>
           <time datetime="2019-02-03">7</time>
           <time datetime="2019-02-03">8</time>
           <time datetime="2019-02-03">9</time>
           <time datetime="2019-02-03">10</time>
           <time datetime="2019-02-03">11</time>
           <time datetime="2019-02-03">12</time>
           <time datetime="2019-02-03">13</time>
           <time datetime="2019-02-03">14</time>
           <time datetime="2019-02-03">15</time>
           <time datetime="2019-02-03">16</time>
           <time datetime="2019-02-03">17</time>
           <time datetime="2019-02-03">18</time>
           <time datetime="2019-02-03">19</time>
           <time datetime="2019-02-03">20</time>
           <time datetime="2019-02-03">21</time>
           <time datetime="2019-02-03">22</time>
           <time datetime="2019-02-03">23</time>
           <time datetime="2019-02-28">24</time>
           <time datetime="2019-02-28">25</time>
           <time datetime="2019-02-28">26</time>
           <time datetime="2019-02-28">27</time>
           <time datetime="2019-02-28">28</time>
           <time datetime="2019-02-28">29</time>
           <time datetime="2019-02-28">30</time>
           <time datetime="2019-02-28">31</time>
          </div>
      </div>
    );
  
}

export default MyCalendar