// Color Pallate All
function generateColorPalette(count) {
    var colors = ['#007F73', '#FF204E', '#FFC700', '#836FFF', '#FF8400', '#FF7F50', '#40E0D0', '#FFD700', '#8A2BE2', '#32CD32'];
    var palette = [];
    for (var i = 0; i < count; i++) {
      palette.push(colors[i % colors.length]);
    }
    return palette;
  }

// Sumber Anggaran
  var options = {
    chart: {
      type: 'donut',
      width: '100%',
    },
    stroke: {
    show:false,
    },
    series: [2, 4, 5,9, 8, 6, 8],
    labels: ['APBD KAB. SUMEDANG', 'BANPROP', 'DANA ALOKASI KHUSUS (DAK)','DANA INSENTIF DAERAH (DID)','DANA INSENTIF DAERAH (DID)','-','PIK'],
    dataLabels: {
      enabled: true
    },
    legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: 'bottom',
      horizontalAlign: 'center', 
      floating: false,
      fontSize: '12px',
      fontWeight: 500,
      formatter: undefined,
      inverseOrder: false,
      width: undefined,
      height: undefined,
      tooltipHoverFormatter: undefined,
      customLegendItems: [],
      offsetX: 0,
      offsetY: 0,
    },
    
    colors: generateColorPalette(10) // Menggunakan palet warna yang dihasilkan
  }

  var chart = new ApexCharts(document.querySelector("#s-anggaran"), options);
chart.render();

// Perlengkapan Lalu Lintas
  var options = {
    chart: {
      type: 'bar',
      height: 350,
      width: '100%'
    },
    plotOptions: {
      bar: {
        horizontal: false, // Mengubah arah bar ke atas
        distributed: true,
        borderRadius: 8 ,// Tambahkan border radius untuk ujung atas batang grafik
        borderRadiusApplication: 'end',

      }
    },
    dataLabels: {
      enabled: false
    },

    series: [{
      name: 'Jumlah', // Ubah nama series menjadi 'Jumlah'
      data: [1, 3, 5, 6,0,9,7,6,5,0]
    }],
    xaxis: {
      categories: ['Rambu Lalu Lintas', 'Marka Jalan', 'ALAT PEMBERI ISYARAT LALU LINTAS (APILL)', 'ALAT PENERANGAN JALAN', 'ALAT PENGENDALI DAN PENGAMAN PENGGUNA JALAN', 'ALAT PENGAWASAN DAN PENGAMAN JALAN', 'FASILITAS UNTUK SEPEDA, PEJALAN KAKI DAN PENYANDANG CACAT', 'FASILITAS PENDUKUNG', 'RPPJ', 'CERMIN'],
      labels: {
        show: false
      }
    },

    yaxis: {
      labels: {
        show: true
      }
    },
     colors: generateColorPalette(10), // Menggunakan palet warna yang dihasilkan
    legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: 'bottom',
      horizontalAlign: 'center', 
      floating: false,
      fontSize: '12px',
      fontWeight: 500,
      formatter: undefined,
      inverseOrder: false,
      width: undefined,
      height: undefined,
      tooltipHoverFormatter: undefined,
      customLegendItems: [],
      offsetX: 0,
      offsetY: 0,
    },
    
    tooltip: {
      y: {
        formatter: function(value) {
          return value + " buah";
        }
      }
    },
    grid: {
      show: true,
      borderColor: '#f0f0f0', // Warna garis grid
      strokeDashArray: 3, // Jenis garis grid (3 = dotted)
      position: 'back', // Letak grid dibelakang data
      xaxis: {
        lines: {
          show: false // Menampilkan grid pada sumbu x
        }
      },
      yaxis: {
        lines: {
          show: true // Menampilkan grid pada sumbu y
        }
      },
      row: {
        colors: undefined, // Warna alternatif untuk baris grid
        opacity: 0.5 // Opasitas baris grid
      },
      column: {
        colors: undefined, // Warna alternatif untuk kolom grid
        opacity: 0.5 // Opasitas kolom grid
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    }
  }

  var chart = new ApexCharts(document.querySelector("#p-lalulintas"), options);
chart.render();
  
// Kondisi Perlengkapan
  var options = {
    chart: {
      type: 'donut',
      width: '100%'
    },
    stroke: {
    show:false,
    },
    series: [4, 0],
    labels: ['Baik', 'Rusak'],
    dataLabels: {
      enabled: true
    },
  legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: 'bottom',
      horizontalAlign: 'center', 
      floating: false,
      fontSize: '12px',
      fontWeight: 500,
      formatter: undefined,
      inverseOrder: false,
      width: undefined,
      height: undefined,
      tooltipHoverFormatter: undefined,
      customLegendItems: [],
      offsetX: 0,
      offsetY: 0,
    },
    
     colors: generateColorPalette(10) // Menggunakan palet warna yang dihasilkan
  }

  var chart = new ApexCharts(document.querySelector("#k-perlengkapan"), options);
chart.render();

// Detail Pelaporan
  var options = {
    chart: {
      type: 'line',
      height: 350,
      width: '100%'
    },
    series: [
      {
        name: 'Status Menunggu Konfirmasi',
        data: [
          { x: 'Feb', y: 4 },
          { x: 'Mar', y: 5 },
          { x: 'Apr', y: 0 }
          // Tambahkan data lainnya di sini
        ]
      },
      {
        name: 'Status Proses',
        data: [
          { x: 'Feb', y: 43 },
          { x: 'Mar', y: 2 },
          { x: 'Apr', y: 2 }
          // Tambahkan data lainnya di sini
        ]
      },
      {
        name: 'Status Selesai',
        data: [
          { x: 'Feb 2023', y: 10 },
          { x: 'Mar 2023', y: 5 },
          { x: 'Apr', y: 0 }
          // Tambahkan data lainnya di sini
        ]
      }
    ],
    xaxis: {
      type: 'category'
    },
    yaxis: {
      title: {
        text: 'Statistik Pelaporan'
      }
    },
    legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: 'bottom',
      horizontalAlign: 'center', 
      floating: false,
      fontSize: '12px',
      fontWeight: 500,
      formatter: undefined,
      inverseOrder: false,
      width: undefined,
      height: undefined,
      tooltipHoverFormatter: undefined,
      customLegendItems: [],
      offsetX: 0,
      offsetY: 0,
    },
    
    stroke: {
          curve: 'smooth'
        },
    grid: {
      show: true,
      borderColor: '#f0f0f0', // Warna garis grid
      strokeDashArray: 3, // Jenis garis grid (3 = dotted)
      position: 'back', // Letak grid dibelakang data
      xaxis: {
        lines: {
          show: false // Menampilkan grid pada sumbu x
        }
      },
      yaxis: {
        lines: {
          show: true // Menampilkan grid pada sumbu y
        }
      },
      row: {
        colors: undefined, // Warna alternatif untuk baris grid
        opacity: 0.5 // Opasitas baris grid
      },
      column: {
        colors: undefined, // Warna alternatif untuk kolom grid
        opacity: 0.5 // Opasitas kolom grid
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
     colors: generateColorPalette(10) // Menggunakan palet warna yang dihasilkan
  };

  var chart = new ApexCharts(document.querySelector("#d-pelaporan"), options);
  chart.render();