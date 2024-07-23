Project Requirement
1. Pinia
2. Vue Router
3. Typescript
4. shadcn UI

### 1. Create Project

npm create vite@latest
cd vue-course
npm install
npm run dev


### 2. Add Tailwind and its configuration

`npm install -D tailwindcss autoprefixer`

### 3. Tambahkan di vite.config.ts

`import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'`

### 4. Tambahkan juga 
css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },

### 5. Run the CLI
npx shadcn-vue@latest init
![npx shadcn](gambar_readme/1.setelah%20npx%20shadcn.png)

### 6. Run the project

`npm run dev`

### 7, Hapus bagian ini di App.vue

```
<header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
</header>

<style scoped></style>

Hapus juga RouterLink
```

### 8. Hapus bagian ini di views/HomeView.vue

<main>
    <TheWelcome></TheWelcome>
</main>

### 9. Hapus AboutView.vue dari folder views  
### 10. Hapus kode ini dari router
    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    } 
    

### 11. Hapus semua component dari folder components
### 12. Hapus file base.css dari folder assets
### 13. Adding components to your project.
`npx shadcn-vue@latest add button`
button akan berada di folder components

### 14. Import button ke file yang diinginkan
import { Button } from '@/components/ui/button'
panggil dengan cara : <Button>Click saya lur</Button>

### 15. Untuk menambahkan variant pada button
![variant](gambar_readme/2.tambah%20variant%20button.png)
disini saya menambahkan premium

### 16. Import seluruh component yang dibutuhkan 

```npx shadcn-vue@latest add avatar card dialog dropdown-menu form input label pagination scroll-area select skeleton```

### 17. Buat file Login.vue di views dan bungkus di dalam Auth
![File Login.vue](gambar_readme/3.tambah%20file%20Login.vue.png)

### 18. Jangan lupa import ke dalam folder index.ts
![Import ](gambar_readme/4.%20import%20Login.vue.png)

### 19. Tambahkan router untuk Login juga ya

![Router Login](gambar_readme/5.router%20untuk%20loguin.png)

### 20. Di halaman Login.vue, copas saja code untuk Tampilan loginnya
```
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Pastikan untuk mengimport komponen yang digunakan
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RouterLink } from 'vue-router';

type PAYLOAD = {
  password: string;
  username: string;
};

const form = ref<PAYLOAD>({
  password: '',
  username: '',
});

const router = useRouter();

const onSubmit = async () => {
  try {
    router.push('/');
  } catch (error) {
    console.log(error);
  } finally {
  }
};
</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <div class="mx-auto w-full max-w-md">
      <form @submit.prevent="onSubmit">
        <Card class="overflow-y-auto">
          <CardHeader class="space-y-1">
            <CardTitle class="text-2xl"> Welcome Back </CardTitle>
            <CardDescription> Enter your details below to login </CardDescription>
          </CardHeader>
          <CardContent class="grid gap-4">
            <div class="grid gap-2">
              <Label for="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="username"
                v-model="form.username"
              />
            </div>
            <div class="grid gap-2">
              <Label for="password">Password</Label>
              <Input id="password" type="password" v-model="form.password" placeholder="Type your Password"/>
            </div>
          </CardContent>
          <CardFooter class="flex-col space-y-2">
            <Button class="w-full" type="submit"> Login </Button>
            <p>
              Don't have an account?
              <RouterLink
                to="/auth/register"
                class="border-b border-gray-500 text-muted-foreground hover:text-primary"
              >
                Register
              </RouterLink>
            </p>
          </CardFooter>
        </Card>
      </form>
    </div>
  </div>
</template>
```

### 21. Buat Halamaan register di Auth -> Register.vue

![Register type](gambar_readme/6.modifikasi%20type%20selayaknya%20register.png)

### 22. Sesuaikan template Register.vue dengan type yang sudah didefinisikan
```
 <form @submit.prevent="onSubmit">
                <Card class="overflow-y-auto">
                    <CardHeader class="space-y-1">
                        <CardTitle class="text-2xl"> Create an Account</CardTitle>
                        <CardDescription> Enter your details below to create your account </CardDescription>
                    </CardHeader>
                    <CardContent class="grid gap-4">
                        <div class="grid gap-2">
                            <Label for="email">Email</Label>
                            <Input id="email" type="text" placeholder="email" v-model="form.email" />
                        </div>
                        <div class="grid gap-2">
                            <Label for="username">Username</Label>
                            <Input id="username" type="text" placeholder="username" v-model="form.username" />
                        </div>
                        <div class="grid gap-2">
                            <Label for="password">Password</Label>
                            <Input id="password" type="password" v-model="form.password"
                                placeholder="Type your Password" />
                        </div>
                        <div class="grid gap-1">
                            <Label for="role">Role</Label>
                            <Select v-model="form.role" id="role">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="USER"> USER </SelectItem>
                                        <SelectItem value="ADMIN"> ADMIN </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                    <CardFooter class="flex-col space-y-2">
                        <Button class="w-full" type="submit"> Register </Button>
                        <p>
                            Already have an account?
                            <RouterLink to="/auth/login"
                                class="border-b border-gray-500 text-muted-foreground hover:text-primary">
                                Login
                            </RouterLink>
                        </p>
                    </CardFooter>
                </Card>
            </form>
```

### 23. Jangan lupa tambahakan juga di file router/index.ts untuk mendeteksi file Register
![Router untuk Regsiter](gambar_readme/7.register%20router.png)

### 24. Integrasi ke API supaya logic Register dan Login Berhasil

- 1. Gunakan apihub : https://github.com/hiteshchoudhary/apihub
- 2. Untuk menggunakan API nya masuk ke web : https://api.freeapi.app/#/

### 25. install dulu packagenya

```
npm i axios notivue vue-global-loader
```
1. axios
2. notivue  
3. vue-global-loader

### 26. Setup axios dengan membuat folder plugins/axios.ts
### 27. Didalam axios.ts buat konfigurasi untuk menangkap API dari link Swagger
![axios instance](gambar_readme/8.instance%20axios.png)

### 28. Kemudian setup pinia sebagai state Management

![Pinia Setup](gambar_readme/9.setup%20pinia%20dengan%20Options.png)

### 29. Import Store ke file yang diperlukan (register.vue)
![Modifikasi](gambar_readme/10.registrasikan%20store%20ke%20register.vue.png)

### 30. Membuat Type untuk response API di folder src dan buat folder types
![folder types](gambar_readme/11.%20Type%20register.png)

### 31. Tambahkan kode ini
![type index.ts](gambar_readme/12.Rincian%20response.png)

### 32. Sekarang buat function untuk Login di authStore.ts
![Login](gambar_readme/13.fungsi%20loginUser.png)

### 33. Auth selesai, Bagian selanjutnya adalah Category
- Buat file Category.vue di folder views

Sesuaikan dengan yang diinginkan Swagger
```
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Pastikan untuk mengimport komponen yang digunakan
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { useAuthStore } from '@/stores/authStore';

type PAYLOAD = {
    name:string
};

const form = ref<PAYLOAD>({
   name:'Category 1'
});

const router = useRouter();
const store = useAuthStore()

const onSubmit = async () => {
    try {
        await store.loginUser(form.value)
        router.push('/');
    } catch (error) {
        console.log(error);
    } finally {
    }
};
</script>

<template>
    <div class="flex flex-col justify-center items-center min-h-screen">
        <div class="mx-auto w-full max-w-md">
            <form @submit.prevent="onSubmit">
                <Card class="overflow-y-auto">
                    <CardContent class="grid gap-4">
                        <div class="grid gap-2">
                            <Label for="username">Username</Label>
                            <Input id="username" type="text" placeholder="username" v-model="form.username" />
                        </div>
                    </CardContent>
                    <CardFooter class="flex-col space-y-2">
                        <Button class="w-full" type="submit"> Create </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    </div>
</template>
```

### 34.Buat categoryStore.ts di folder stores untuk menyimpan state
![categoryStore.ts](gambar_readme/14.buat%20categoryStore.ts.png)

### 35. Tambahkan lagi types untuk menampung Category nya
![type category](gambar_readme/15.type%20category.png)

### 36. Betulkan lagi categoryStore.ts -> sesuaikan dengan nama store yang dibuat

### 37. Sesuaikan lagi (import dan lain-lain) file Category.vue

### 38. JANGAN LUPA TAMBAHKAN ROUTES menuju categories
![import](gambar_readme/16.import%20Category.png)
![path category](gambar_readme/17.path%20category.png)

### 39. Karena create category gagal (harus membutuhkan access token), maka hal yang harus dilakukan adalah menyimpan token setelah fungsi login, pergi ke file authStore.ts

![authStore loginUser](gambar_readme/18.simpan%20di%20fungsi%20loginUser.png)

### 40. Simpan State nya 
![Simpan di state](gambar_readme/19.%20simpan%20state.png)

![Sebagai user yang login](gambar_readme/20.%20definisikan%20user%20sebagai%20yg%20sekarang%20login.png)

### 41. Sekarang ambil dan kirim dengan menggunakan AXIOS ---> Pergi ke file axios.ts
