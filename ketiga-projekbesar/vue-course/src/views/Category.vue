<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Pastikan untuk mengimport komponen yang digunakan
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';


import { useCategoryStore } from '@/stores/categoryStore';

type PAYLOAD = {
    name:string
};

const form = ref<PAYLOAD>({
   name:'Category 1'
});

const router = useRouter();
const store = useCategoryStore()

const onSubmit = async () => {
    try {
        await store.createCategory(form.value)
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
                <Card class="overflow-y-auto pt-4">
                    <CardContent class="grid gap-4">
                        <div class="grid gap-2">
                            <Label for="name">Name</Label>
                            <Input id="name" type="text" placeholder="name" v-model="form.name" />
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
